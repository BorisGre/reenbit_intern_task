import React from 'react';
import Avatar from './../../components/avatar/avatar';
import Search from './../../components/searchBox/search';
import ContactList from './../../components/contactsList/contacts';
import ActiveContact from './../../components/activeContact/activeContact';
import MessagesList from './../../components/messagesList/messagesList';
import NewMessage from './../../components/newMessage/newMessage';
import { useSelector } from 'react-redux';

const MainPage = ({userID}) => {

    const AvatarProps = {userID}
    const ContactListProps = {userID}

        const activeContactID = useSelector(state => {
                    state.users[userID]['active_conversation_with']
        });

    const ActiveContactProps = {activeContactID}
    const MessagesListProps = {activeContactID}
    const NewMessageProps = {userID, activeContactID}


    return (
            <section className="mainPage">
                <nav>
                    <ul>
                        <li><Avatar {...AvatarProps}/></li>
                        <li><Search/></li>
                        <li><ContactList {...ContactListProps}/></li>
                    </ul>
                </nav>
                <article>
                    <ul>
                        <li><ActiveContact {...ActiveContactProps}/></li>
                        <li><MessagesList {...MessagesListProps}/></li>
                        <li><NewMessage {...NewMessageProps}/></li>
                    </ul>
                </article>
            </section>
            )
    }
export default MainPage;                