import {Props} from "../types/MessageProps";

const Message:React.FunctionComponent<Props> = ({ from, message }) =>{
  
  return (<>
    <li key={message.id} className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </li>
  </>

  )
}


export default Message;