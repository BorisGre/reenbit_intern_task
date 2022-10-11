import React from 'react';
import { convertDate } from '../../helpers/dateHelper';
import { useSelector } from 'react-redux';
import { Context } from '../../components/context';

const Contact = ({contactID, userID}) => {

    const boundedActions = useContext(Context);
    const contact = useSelector(state => state.user[contactID])
    
    const messages = useSelector(state => { 

          const conditionDirect = (m) => m.sender_id === contactID && m.receiver_id === userID  
          const conditionReverse = (m) => m.sender_id === userID && m.receiver_id === contactID

          const messages = state.messages.filter(m => {

            if((conditionDirect(m) || conditionReverse(m)) && draft === false){
                return true;
            }
        });
        return messages
    });

    const unreadedMessagesCount = messages.filter(m => m.readed_status === false).length
    const lastMessage = messages.pop();

    const contactClick = () => boundedActions.selectContact(contactID);

    return (
        <li onClick={contactClick}>
            <ul className="contactComponents">
                <li><Avatar {...contactID}/></li>
                <li>
                    <p className="contactName">{contact.name}</p>
                    <p className="contactLastMessage">{lastMessage.text}</p>
                </li>
                <li>
                    <p className="lastMessageDate">{convertDate(lastMessage.send_date)}</p>
                    {unreadedMessagesCount ? 
                        <p className="unreadedMessagesCount">{unreadedMessagesCount}</p>
                        : ""
                    }
                </li>
            </ul>
        </li>
    )
}

export default Contact;