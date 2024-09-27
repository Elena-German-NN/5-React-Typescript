import { useState } from "react";

export default function Konvertor() {
  const [color, setColor] = useState({
    valueInput: '',
    valueLabel: '',
    rgbColor: ''
  });

  function hexToDec(hex: string) {
    return parseInt(hex, 16);
  }

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 6) {
      const result: RegExpExecArray | null = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
      if (result) {
        const r = hexToDec(result[1]);
        const g = hexToDec(result[2]);
        const b = hexToDec(result[3]);
        const rgbColor: string = String(r) + ' ' + String(g) + ' ' + String(b);
        setColor({
          valueInput: value,
          valueLabel: 'rgb(' + String(r) + ', ' + String(g) + ', ' + String(b) + ')',
          rgbColor: rgbColor
        });
      } else setColor({
        valueInput: value,
        valueLabel: 'Ошибка!',
        rgbColor: ''
      });
    } else setColor({
      valueInput: value,
      valueLabel: '',
      rgbColor: ''
    });
  }

  return (
    <div className="konvertor" style={{ backgroundColor: 'rgba(' + color.rgbColor + ' / 0.8' }}>
      <form>
        <input
          id="vcolor"
          name="inputcolor"
          className="blok"
          type="text"
          placeholder="Введите цвет в HEX"
          onChange={inputChange}
          value={color.valueInput}>
        </input>
        <div style={{ backgroundColor: 'rgba(' + color.rgbColor + ' / 1)' }}
          className="blok" >
          <label>{color.valueLabel}</label>
        </div>
      </form>
    </div>
  )
}
