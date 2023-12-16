import {
  GetAndShowAllDiscount,
  PrepareCreateDiscountForm,
  CreateNewDiscount,
  DeleteDiscount,
} from "./Funcs/discount.js";

window.DeleteDiscount = DeleteDiscount;

window.addEventListener("load", () => {
  const AddNewDiscountBtn = document.querySelector("#AddNewDiscountBtn");
  GetAndShowAllDiscount();
  PrepareCreateDiscountForm();
  AddNewDiscountBtn.addEventListener("click", (e) => {
    e.preventDefault();
    CreateNewDiscount();
  });
});
