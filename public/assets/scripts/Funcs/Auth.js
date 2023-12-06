
const $ = document
const FullNameInput = $.querySelector('#FullNameInput')
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
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "ثبت نام با موفقیت انجام شد",
                showConfirmButton: false,
                timer: 2500
              });
              ClearInput()
        }else if(res.status === 409){
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: 'نام کاربری یا ایمیل از قبل موجود است',
                showConfirmButton: false,
                timer: 2500
              });
              ClearInput()
        }
       return res.json()
    })
    .then(result => {
        console.log(result);
    })
}
export { Register }