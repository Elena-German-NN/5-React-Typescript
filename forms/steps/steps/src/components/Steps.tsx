import dayjs from "dayjs";
import { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat"

interface Step {
    data: string,
    distance: string,
}

const stepStore: Step[] = [];

export default function Steps() {

    const [form, setForm] = useState({
        data: '',
        km: ''
    });

    const [steps, setSteps] = useState(stepStore)

    const addSteps = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //проверка даты
        if (form.data.length) {
            dayjs.extend(customParseFormat);
            const day = dayjs(form.data, 'DD.MM.YY', true);
            if (day.isValid()) {
                form.data = String(day.format('DD.MM.YY'));
                // проверка расстояния
                if (form.km.length && !isNaN(+form.km)) {
                    const stepHasDate = steps.find(item => item.data == form.data) 
                    if (stepHasDate) {
                        stepHasDate.distance = String(Number(stepHasDate.distance) + Number(form.km));
                        setSteps(prevSteps => prevSteps.sort((a, b) =>
                            Number(a.data.replace('.', '')) - Number(b.data.replace('.', ''))));
                    } else {
                        setSteps(
                            steps.concat({
                                data: form.data,
                                distance: form.km
                            }).sort((a, b) =>
                                Number(a.data.replace('.', '')) - Number(b.data.replace('.', '')))
                        );
                    }
                    setForm({
                        data: '',
                        km: ''
                    });

                }
            }
        }

    }

    const changeSteps = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => {
            return { ...prevForm, [name]: value }
        });
    }

    const deleteStep = (id: number) => {
        setSteps(prevSteps => {
            return prevSteps.filter((_step, i) => id !== i)
        });
    }

    return (
        <form>
            <div className="input-block">
                <div className="input-block-part">
                    <label>Дата (ДД.ММ.ГГ)</label>
                    <input
                        id="data"
                        type="text"
                        className='block'
                        name='data'
                        value={form.data}
                        onChange={changeSteps}
                    />
                </div>
                <div className="input-block-part">
                    <label>Пройдено км</label>
                    <input
                        type="text"
                        className='block'
                        name='km'
                        value={form.km}
                        onChange={changeSteps}
                    />
                </div>
                <div className="input-block-part">
                    <button
                        className='block'
                        onClick={addSteps}
                        name="add"
                    > OK </button>
                </div>
            </div>
            <div className="list-block">
                <label>Дата (ДД.ММ.ГГ)</label>
                <label>Пройдено км</label>
                <label>Действия</label>
            </div>
            <div>
                <ul className="list">
                    {steps.map((item, id) => {
                        if (steps.length) {
                            return (
                                <li className="step" key={id}>
                                    <label>{item.data}</label>
                                    <label>{item.distance}</label>
                                    <label
                                        className="btndel"
                                        onClick={() => deleteStep(id)}
                                    >✘</label>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>

        </form>
    )
}
