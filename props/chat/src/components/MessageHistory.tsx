
import React from "react";
import type { MessageType } from "../types/MessageType";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

type Props = {
    list: MessageType[]
}

const MessageHistory:React.FunctionComponent<Props> = ({list=[]}) => {
   
    if (list.length != 0) {
        return (<>
            <ul>
                {list.map((item: MessageType) => {
                    const message = {
                        id: item.id,
                        time: item.time,
                        text: item.text
                    }
                    if (item.type === 'message') { return (<Message from={item.from} message={message} />) }
                    else if (item.type === 'response') { return (<Response from={item.from} message={message} />) }
                    else if (item.type === 'typing') { return (<Typing from={item.from} message={message} />) }
                })}
            </ul>
        </>)
    }
}


export default MessageHistory;