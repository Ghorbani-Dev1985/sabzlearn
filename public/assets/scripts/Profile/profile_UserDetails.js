import {  ShowUserInfos, EditUserDetails } from "./Funcs/profile_UserDetails.js";



window.addEventListener("load", () => {
  const EditUserDetailsBtn = document.querySelector("#EditUserDetailsBtn");
  ShowUserInfos()
  EditUserDetailsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    EditUserDetails();
  });
});
