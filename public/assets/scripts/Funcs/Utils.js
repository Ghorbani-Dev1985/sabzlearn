const ShowSwalAlert = ( icon, title , callback) => {
    Swal.fire({
        position: "top-center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500
      }).then(result => callback(result))
}

const SaveIntoLocalStorage = (key , value) => {
  return localStorage.setItem(key , JSON.stringify(value))
}

const GetFromLocalStorage = (key) => {
    return JSON.stringify(localStorage.getItem(key))
}

const GetToken = () => {
    const userToken =  JSON.parse(localStorage.getItem('user'))
    return userToken ? userToken.token : null 
}

const isLogin = () => {
    const userInfos = localStorage.getItem('user');
    return userInfos ? true : false;
}

const GetUrlParam = key => {
   const urlParams = new URLSearchParams(window.location.search)
   return urlParams.get(key)
}



export { ShowSwalAlert , SaveIntoLocalStorage , GetFromLocalStorage , GetToken , isLogin , GetUrlParam} 
