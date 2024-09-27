import Watch from "../interface/Watch"
import WatchItem from "./WatchItem"
import { useState, useEffect } from "react"

interface Props {
  watchList: Watch[],
  onRemove: (watch: Watch) => void
}

export default function WatchList({ watchList, onRemove }: Props) {

  const [hour, setHour] = useState(new Date().getHours() % 12);
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const date = new Date();
  const currentTimeZoneOffsetGMT = (date.getTimezoneOffset()) / 60;
  const time = {
    h: hour,
    m: minute,
    s: second,
    currentTimeZoneOffsetGMT: currentTimeZoneOffsetGMT
  }

  return (
    <ul className="watches">
      {watchList.map((watch: Watch) => {
        return (
          <WatchItem
            key={watch.id}
            watch={watch}
            onRemove={onRemove}
            time={time} />
        )
      })}
    </ul>
  )
}
