import React, {useState} from 'react'
import NotificationList from './notification_list'

export const Notifications = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, name: 'Reparaciones', description: 'Calle San Carlos obstruida, por favor busque alternativas.', date: '27/11/2022', hour: '12:31', location: 'San Carlos 420'},
        { id: 2, name: 'Incendio', description: 'Incendio en farmacia Dr. Simi.', date: '28/11/2022', hour: '14:50', location: 'Santa Isabel 69'},
        { id: 3, name: 'Manifestacion', description: 'Manifestaciones en Metro Baquedano.', date: '28/11/2022', hour: '19:00', location: 'Metro Baquedano'}
    ])
    return (
        <div className='notifications'>
            <h1 className='notifications_title'>Notificaciones</h1>
            <NotificationList notifications={notifications}/>
        </div>
  )
}

export default Notifications
