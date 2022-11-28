import React from 'react'

export const Notification = ({ notification }) => {
    return (
        <div className='notificationContainer'>
            <div className='notificationContent'>
                <label className='notificationTitle'>
                    {notification.name} - {notification.hour} - {notification.location}
                </label>
                <p className='notificationDescription'>{notification.description}</p>
            </div>
            <div className="horizontalLine"/>
        </div>
  )
}

export default Notification
