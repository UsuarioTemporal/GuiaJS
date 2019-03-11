import './styles.css'
import Photos from './photos'
const alert_ = (text)=>{
    alert(text)
}
// alert_('thom')
const photos = new Photos()
photos.getphotos().then(response=>console.log(response))
const isValid = (texto)=>{
    try {
        JSON.parse(texto)
        return true;
    } catch  {
        return false;
    }
}
console.log(isValid('s'));