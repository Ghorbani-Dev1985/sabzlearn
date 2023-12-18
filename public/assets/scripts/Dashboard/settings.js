import {
  EditUserInfos,
} from "./Funcs/settings.js";


window.addEventListener("load", () => {
  const EditUserInfoBtn = document.querySelector("#EditUserInfoBtn");
  EditUserInfoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    EditUserInfos();
  });
});
