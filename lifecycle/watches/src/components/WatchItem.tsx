import Watch from "../interface/Watch"

interface Props {
    watch: Watch,
    onRemove: (watch: Watch) => void
    time: {
        h: number,
        m: number,
        s: number,
        currentTimeZoneOffsetGMT: number
    }
}

export default function WatchItem({ watch, onRemove, time }: Props) {

    const watchHour = time.h + time.currentTimeZoneOffsetGMT + Number(watch.timeZone);
    const hourRotate = ((watchHour + time.m / 60) * 360) / 12;
    const minRotate = (time.m / 60) * 360;
    const secRotate = (time.s / 60) * 360;
    
    return (
        <>
            <li className='city-clock'>
                <div className="city">{watch.city}</div>
                <div className="watch">
                    <div className="time">
                        <div
                            className="hours"
                            style={{ transform: `rotate(${hourRotate}deg)` }}
                        ></div>
                        <div
                            className="minutes"
                            style={{ transform: `rotate(${minRotate}deg)` }}
                        ></div>
                        <div
                            className="seconds"
                            style={{ transform: `rotate(${secRotate}deg)` }}
                        ></div>
                    </div>
                    <button className="btn-delete" onClick={() => onRemove(watch)}>x</button>
                </div>
            </li>
        </>
    )
}
