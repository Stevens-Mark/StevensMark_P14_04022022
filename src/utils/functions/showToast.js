 
 // import icons
import checkIcon from '../../assets/icons/check.svg'
import errorIcon from '../../assets/icons/error.svg'
import infoIcon from '../../assets/icons/info.svg'
import warningIcon from '../../assets/icons/warning.svg'
 
/**
 * set the toast type to show with message
 * @function showToast
 * @param {string} type (warning, info etc..)
 * @param {string} message 
 */
export const showToast = ( type, message ) => {

  let toastProperties = null
  // randomly generates IDs for each toast notification used for delete functionality
  const id = Math.floor((Math.random() * 100) + 1)
  
  switch(type) {
    case 'success':
        toastProperties = {
            id,
            title: 'Success',
            description: message,
            backgroundColor: '#5cb85c',
            icon: checkIcon
        }
        break;
    case 'danger':
        toastProperties = {
            id,
            title: 'Danger',
            description: message,
            backgroundColor: '#d9534f',
            icon: errorIcon
        }
        break;
    case 'info':
        toastProperties = {
            id,
            title: 'Info',
            description: message,
            backgroundColor: '#5bc0de',
            icon: infoIcon
        }
        break;
    case 'warning':
        toastProperties = {
            id,
            title: 'Warning',
            description: message,
            backgroundColor: '#f0ad4e',
            icon: warningIcon
        }
        break;
    default:
        toastProperties = {}
  }
  return toastProperties
}
