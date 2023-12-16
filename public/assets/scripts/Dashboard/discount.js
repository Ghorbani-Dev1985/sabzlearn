import {
  GetAndShowAllDiscount,
  CreateNewMenu,
  PrepareCreateMenuFor,
  CreateNewDiscount,
  DeleteComment,
} from "./Funcs/discount.js";

window.DeleteComment = DeleteComment;

window.addEventListener("load", () => {
  const AddNewDiscountBtn = document.querySelector("#AddNewDiscountBtn");
  GetAndShowAllDiscount();
  PrepareCreateMenuFor();
  AddNewDiscountBtn.addEventListener("click", (e) => {
    e.preventDefault();
    CreateNewDiscount();
  });
});
