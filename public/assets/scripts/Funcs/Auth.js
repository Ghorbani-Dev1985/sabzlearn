const $ = document
const FullNameInput = $.querySelector('#FullNameInput')
const UserNameInput = $.querySelector('#UserNameInput')
const PhoneNumberInput = $.querySelector('#PhoneNumberInput')
const EmailInput = $.querySelector('#EmailInput')
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

const Register = () => {
    const NewUserInfos = {
        name: FullNameInput.value.trim(),
        username: UserNameInput.value.trim(),
        email: EmailInput.value.trim(),
        phone: PhoneNumberInput.trim(),
        password: PasswordInput.value.trim(),
        confirmPassword: RepeatPasswordInput.value.trim()  
    }
    fetch(`http://localhost/4000/v1/auth/register` , {
        method: 'Post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(NewUserInfos)
    }).then(res => res.json())
    .then(result => {
        console.log(result);
    })
}
export { Register }