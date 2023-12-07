import { Login , GetMe} from './Funcs/Auth.js';
const $ = document;
const LoginPassInput = $.querySelector('#LoginPassInput')
const HiddenPassSvg = $.querySelector('#HiddenPassSvg')
const ShowPassSvg = $.querySelector('#ShowPassSvg')
const LoginBtn = $.querySelector('#LoginBtn')

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

LoginBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    Login()
})

console.log(GetMe());