import {
  SetCampaign,
  ShowOrderDetails,
} from "./Funcs/profile_orders.js";

window.ShowOrderDetails = ShowOrderDetails;

window.addEventListener("load", () => {
  const AddNewCampaignBtn = document.querySelector("#AddNewCampaignBtn");
  SetCampaign()
  AddNewCampaignBtn.addEventListener("click", (e) => {
    e.preventDefault();
    SetCampaign();
  });
});
