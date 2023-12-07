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
    return JSON.parse(localStorage.getItem('user')).token
}

export { ShowSwalAlert , SaveIntoLocalStorage , GetFromLocalStorage , GetToken} 
