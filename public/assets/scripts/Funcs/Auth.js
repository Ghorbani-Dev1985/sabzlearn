import { GetToken, ShowSwalAlert } from "./Utils.js";
import { SaveIntoLocalStorage } from "./Utils.js"
const $ = document
const FullNameInput = $.querySelector('#FullNameInput');
const UserNameInput = $.querySelector('#UserNameInput')
const PhoneNumberInput = $.querySelector('#PhoneNumberInput')
const EmailInput = $.querySelector('#EmailInput')
const PasswordInput = $.querySelector('#PasswordInput')
const RepeatPasswordInput = $.querySelector('#RepeatPasswordInput')
const LoginUsernameInput = $.querySelector('#LoginUsernameInput')
const LoginPassInput = $.querySelector('#LoginPassInput')
const LoginBtn = $.querySelector('#LoginBtn')


// Register Func
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

// Login Func
const Login = () => {
  const UserLoginInfos = {
    identifier : LoginUsernameInput.value.trim(),
    password : LoginPassInput.value.trim()
  }
  fetch(`http://localhost:4000/v1/auth/login` , {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(UserLoginInfos)
})
.then(res => {
    console.log(res);
    if(res.status === 401){
        ShowSwalAlert("error" , 'کاربری با چنین اطلاعات یافت نگردید')
    }else if(res.status === 200){
        ShowSwalAlert("success" , ' ورود با موفقیت انجام شد' , 
        () => location.href = 'index.html'
        )
  }
    return res.json()
})
.then(result => {
    SaveIntoLocalStorage('user' , {token : result.accessToken})
})
}

// GetMe Func
const GetMe = async() => {
    const token = GetToken();
    if(!token){
        return false
    }
       const res = await fetch(`http://localhost:4000/v1/auth/me` , {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${token}`
            },
        })
        const data = await res.json();
        return data;
}

export { Register , Login , GetMe}