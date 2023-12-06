const $ = document;
const PassInput = $.querySelector('.PassInput')
const HiddenPassSvg = $.querySelector('#HiddenPassSvg')
const ShowPassSvg = $.querySelector('#ShowPassSvg')

HiddenPassSvg.addEventListener('click' ,() => {
    LoginPassInput.setAttribute('type' , 'text')
    HiddenPassSvg.classList.toggle('hidden')
    ShowPassSvg.classList.toggle('hidden')
})
ShowPassSvg.addEventListener('click' , () => {
    LoginPassInput.setAttribute('type' , 'password')
    HiddenPassSvg.classList.toggle('hidden')
    ShowPassSvg.classList.toggle('hidden')
})