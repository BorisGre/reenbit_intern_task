import React from 'react';

const Message = ({message}) => {

    return (
        <li>
         <p className="message">{message}</p>
        </li>
    )
}

export default Message;