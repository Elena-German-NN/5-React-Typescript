
import {Props} from "../types/MessageProps";

const Response:React.FunctionComponent<Props>=({ from, message })=> {
    return (<>
<li key={message.id}>
        <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
            <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">
            {message.text}
        </div>
        </li>
    </>

    )
}

export default Response;