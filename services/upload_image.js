'use-strict';

const btn_upload = document.querySelector('.form__content .button-img');
const widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'volcanizado',
    uploadPreset: 'volc_upload'
}, (err, result) => {
    if(!err && result && result.event === 'success'){ // imagen subida a la nube correctamente
        const placeholder = document.getElementById('placeholder-img');
        placeholder.textContent = 'Imagen subida a la nube';
        console.log(result.info.secure_url);
    }
});

btn_upload.addEventListener('click', (e)=> {
    e.preventDefault();
    widget_cloudinary.open();
}, false);

