import React, { useContext, useState } from 'react';
import {useSelector} from 'react-redux';
import { Context } from '../../components/context';

const NewMessage = ({userID, activeContactID}) => {
 
    const boundedActions = useContext(Context);
    const message = useSelector(state => {

        const messages = state.messages

        return messages.filter(m => { 
            if(m.sender_id === userID && m.receiver_id === activeContactID && m.draft === true){
                return true;
        } 
        })
    });

    const message_draft = message[0].text;

    const [newMessage, setMessage] = useState(message_draft)

    const saveDraft = (e) => {

            const newMessage = e.target.value;
                    setMessage(newMessage)
                    boundedActions.saveMessageDraft(newMessage)
    }

    const sendMessage = () => boundedActions.sendMessage(newMessage)

    return (

        <div className="newMessageSegment">
            <form>
                <fieldset>
                    <input type="text" name="message" placeholder="Type here a new message"
                    onChange={saveDraft} value={newMessage}/>

                    <button type="submit" onClick={sendMessage}>
                        <img src="/public/assets/?"/>
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default NewMessage;