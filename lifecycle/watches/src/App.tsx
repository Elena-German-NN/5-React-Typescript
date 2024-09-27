import './App.css'
import React, { useCallback, useState } from "react";
import WatchList from "./components/WatchList";
import Watch from "./interface/Watch"


const cityListInit: Watch[] = []
const formInit = { city: '', timeZone: '' }

//проверка ввода смещения по Гринвичу (-12 | 0 | +12)
const regexp = /(^\+?[1-9]$)|(^\+?1[0-2]$)|(^\-[1-9]$)|(^\-1[0-2]$)|(^0$)/;

function App() {

  const [form, setForm] = useState(formInit);
  const [watchList, setWatchList] = useState(cityListInit);

  const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value }
    });
  }

  const addTimeZone = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (form.city.length && regexp.test(form.timeZone)) {
      const uniqueID = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      setWatchList(watchList.concat({
        city: form.city,
        timeZone: form.timeZone,
        id: uniqueID
      }));
      setForm(formInit);
    }
  }

  const removeWatch = useCallback((watch: Watch) => {
    setWatchList(prevWatchList => {
      return prevWatchList.filter(w => w.id !== watch.id)
    });
  }, []);

  let haveWatch;
  if (watchList.length) {
    haveWatch = <WatchList watchList={watchList} onRemove={removeWatch} />
  }

  return (<>
    <form>
      <div >
        <label htmlFor="name">Название</label>
        <input
          type="text"
          name='city'
          value={form.city}
          onChange={changeForm}
        />
      </div>
      <div >
        <label htmlFor='timeZone'>Временная зона</label>
        <input
          type="text"
          name='timeZone'
          value={form.timeZone}
          onChange={changeForm}
        />
      </div>
      <div >
        <button
          className='btn-add'
          onClick={addTimeZone}
          name="add">Добавить
        </button>
      </div>
    </form>
    {haveWatch}
  </>
  )
}

export default App
