import React from 'react';
import {useSelector} from 'react-redux';

const ActiveContact = ({contactID}) => {

    const user = useSelector(state => state.users[contactID])

    return (
            <ul className="activeContact">
                <li><Avatar {...contactID}/></li>
                <li>
                    <span className="activeContactName">{user.name}</span>
                </li>
            </ul>
    )
}

export default ActiveContact;