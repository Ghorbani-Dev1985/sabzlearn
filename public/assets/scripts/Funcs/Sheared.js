import { GetMe } from "./Auth.js"
import { isLogin } from "./Utils.js";
const LoginRegisterBody = document.querySelector('#LoginRegisterBody')

console.log('ff');
const ShowUserNameInHeader = () => {
    const isUserLogin = isLogin()
    
    const userInfos = GetMe.then(data => {
        console.log(data);
    })
}

export {ShowUserNameInHeader}