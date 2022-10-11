import React from 'react';
import Contact from './contact';
import { useSelector } from 'react-redux';

const ContactList = ({userID}) => {
    
    const contacts = useSelector(state => {
                 const user = state.users[userID]
                 return user.contact_list
                })

    return (
            <React.Fragment>
                <h2 className="contactsHeader">Chats</h2>
                <ul className={headClasses}>
                    {contacts.map(contact => <Contact {...contact, userID}/>)}
                </ul>
            </React.Fragment>
        )
};

export default ContactList;