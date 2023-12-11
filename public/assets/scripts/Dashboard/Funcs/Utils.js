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

export {GetAdminInfos}