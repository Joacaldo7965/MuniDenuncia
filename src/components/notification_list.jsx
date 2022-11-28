import React from 'react'
import Notification from './notification'

export const NotificationList = ({ notifications }) => {
    return (
        <div>
        <div className="horizontalLine"/>
        {notifications.map(notification => {
            return <Notification key={notification.id} notification={notification} />
        })}
        </div>
    )
}

export default NotificationList
