import Photos from './photos'
const alert_ = (text)=>{
    alert(text)
}
// alert_('thom')
const photos = new Photos()
photos.getphotos().then(response=>console.log(response))
