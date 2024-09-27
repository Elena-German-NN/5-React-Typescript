import {Props} from "../types/MessageProps";

const Typing:React.FunctionComponent<Props> = ({ from, message }) =>{
    return (<>
        <li key={message.id}>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="typing">
                <i className="fa fa-circle online" ></i>
                <i className="fa fa-circle online circle2 " ></i>
                <i className="fa fa-circle online circle3" ></i>
            </div>
        </li>
    </>
    )
}
export default Typing;