import React from 'react';
import {useSelector} from 'react-redux';
import Message from './message';

const MessagesList = ({userID, contactID}) => {

    const headClasses = `messagesList`

    const messages = useSelector(state => { 
            return state.messages.filter(m => {

                const fromToDirection = m.sender_id === userID && m.receiver_id === contactID 
                const toFromDirection = m.sender_id === contactID && m.receiver_id === userID 
                
                return (fromToDirection || toFromDirection) ? true : false;
            })
    })

    //const sortedMessages = messages.sort(m.send_date-m.send_date);

    return (
            <ul className={headClasses}>
                    {messages.map(message => <Message {...message}/>)}
            </ul>
        )
};

export default MessagesList;