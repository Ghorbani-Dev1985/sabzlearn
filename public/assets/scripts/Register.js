import { Register } from "./Funcs/Auth.js"
const $ = document
const PasswordInput = $.querySelector('#PasswordInput')
const RepeatPasswordInput = $.querySelector('#RepeatPasswordInput')
const RegisterBtn = $.querySelector('#RegisterBtn')
const HiddenPassSvg = $.querySelector('.HiddenPassSvg')
const ShowPassSvg = $.querySelector('.ShowPassSvg')

HiddenPassSvg.addEventListener('click' ,() => {
    PasswordInput.setAttribute('type' , 'text')
   RepeatPasswordInput.setAttribute('type' , 'text')
    HiddenPassSvg.classList.toggle('hidden')
    ShowPassSvg.classList.toggle('hidden')
})
ShowPassSvg.addEventListener('click' , () => {
    PasswordInput.setAttribute('type' , 'password')
    RepeatPasswordInput.setAttribute('type' , 'password')
    HiddenPassSvg.classList.toggle('hidden')
    ShowPassSvg.classList.toggle('hidden')
})

RegisterBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    Register()
});