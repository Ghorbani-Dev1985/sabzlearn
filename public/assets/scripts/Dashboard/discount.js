import {
  GetAndShowAllDiscount,
  PrepareCreateDiscountForm,
  CreateNewDiscount,
  DeleteComment,
} from "./Funcs/discount.js";

window.DeleteComment = DeleteComment;

window.addEventListener("load", () => {
  const AddNewDiscountBtn = document.querySelector("#AddNewDiscountBtn");
  GetAndShowAllDiscount();
  PrepareCreateDiscountForm();
  AddNewDiscountBtn.addEventListener("click", (e) => {
    e.preventDefault();
    CreateNewDiscount();
  });
});
