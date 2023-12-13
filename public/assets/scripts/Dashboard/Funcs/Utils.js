import {GetToken} from './../../Funcs/Utils.js';

const GetAdminInfos = async () => {
   const res = fetch(`http://localhost:4000/v1/auth/me` , {
        headers:{
            Authorization : `Bearer ${GetToken()}`,
        },
    });

    const admin = (await res).json()

    return admin;
};

const ShowSwalAlert = ( icon, title , callback) => {
    Swal.fire({
        position: "top-center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500
      }).then(result => callback(result))
}

export {GetAdminInfos , ShowSwalAlert}