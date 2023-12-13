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

const ShowSwalAlert =  (title, icon, confirmButtonText, callback) => {
    Swal.fire({
      title,
      icon,
      confirmButtonText,
      timer: 2500
    }).then((result) => {
        if(result.isConfirmed){
          callback() 
        }
    })
  };

export {GetAdminInfos , ShowSwalAlert}