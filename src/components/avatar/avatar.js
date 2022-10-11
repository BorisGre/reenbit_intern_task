import React from 'react';
import {useSelector} from 'react-redux';

const Avatar = ({userID}) => {

    const user = useSelector(state => state.users[userID])
    const userStatuses = {'online': `online`, 'offline': `offline`}
    const statusLabel = userStatuses[user.status]

    return (
            <p className="avatar">
                <img src={user.avatar}/>
                <span className={statusLabel}></span>
            </p>
    )
}

export default Avatar;