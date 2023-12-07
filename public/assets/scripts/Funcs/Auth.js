import { ShowSwalAlert } from "./Utils.js";
import { SaveIntoLocalStorage } from "./Utils.js"
const $ = document
const FullNameInput = $.querySelector('#FullNameInput');
const UserNameInput = $.querySelector('#UserNameInput')
const PhoneNumberInput = $.querySelector('#PhoneNumberInput')
const EmailInput = $.querySelector('#EmailInput')
const PasswordInput = $.querySelector('#PasswordInput')
const RepeatPasswordInput = $.querySelector('#RepeatPasswordInput')


const ClearInput = () => {
    FullNameInput.value = ''
    UserNameInput.value = ''
    PhoneNumberInput.value = ''
    EmailInput.value = ''
    PasswordInput.value = ''
    RepeatPasswordInput.value = ''
}


const Register = () => {
    if(FullNameInput.value === '' || UserNameInput.value === '' || EmailInput.value === '' || PhoneNumberInput.value === '' || PasswordInput.value === '' || RepeatPasswordInput.value === ''){
          ShowSwalAlert("info" , 'لطفا فرم ثبت نام را تکمیل نمایید')
    }else if(PasswordInput.value.trim() !== RepeatPasswordInput.value.trim()){
          ShowSwalAlert("error" , 'رمز عبور با تکرار رمز عبور مطابقت ندارد')
    }else{
        const NewUserInfos = {
            name: FullNameInput.value.trim(),
            username: UserNameInput.value.trim(),
            email: EmailInput.value.trim(),
            phone: PhoneNumberInput.value.trim(),
            password: PasswordInput.value.trim(),
            confirmPassword: RepeatPasswordInput.value.trim(),  
        };
        fetch(`http://localhost:4000/v1/auth/register` , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(NewUserInfos)
        })
        .then(res => {
            console.log(res);
            if(res.status === 201){
                  ShowSwalAlert("success" , 'ثبت نام با موفقیت انجام شد' , 
                  () => location.href = 'index.html'
                  )
            }else if(res.status === 409){
                  ShowSwalAlert("error" , 'نام کاربری یا ایمیل از قبل موجود است')
            }
           return res.json()
        })
        .then(result => {
            SaveIntoLocalStorage('user' , {token : result.accessToken})
        })
    }
}
export { Register }