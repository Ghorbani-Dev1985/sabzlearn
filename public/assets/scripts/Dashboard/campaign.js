import {
  SetCampaign,
  DeleteDiscount,
} from "./Funcs/campaign.js";

window.DeleteDiscount = DeleteDiscount;

window.addEventListener("load", () => {
  const AddNewCampaignBtn = document.querySelector("#AddNewCampaignBtn");
  AddNewCampaignBtn.addEventListener("click", (e) => {
    e.preventDefault();
    SetCampaign();
  });
});
