import React from 'react'
//react notification 
// npm i react-notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
const ReactNotify = () => {
    const showNotification = () => {
        // NotificationManager.info('Info message');
        NotificationManager.success('Success message', 'Title here');
        // NotificationManager.warning('Wrong Email', 'Warning', 1000);
        // NotificationManager.error('Error message', 'Click me!', 5000, () => {
        //     alert('callback');
        //   });
    }
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <NotificationContainer/>
    <div>
      <button onClick={showNotification} className=' text-white bg-red-700 p-4 md:font-semibold font-medium rounded-sm'>Notification Button</button>
    </div>    
    </div>
  )
}

export default ReactNotify
