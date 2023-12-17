import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
} from "../../Funcs/Utils.js";
const $ = document;


const SetCampaign = async () => {
  const CampaignDiscountInput = $.querySelector("#CampaignDiscountInput");
  const res = await fetch(`${BaseUrl()}offs/all` , {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({discount: CampaignDiscountInput.value.trim()})
  });
  const result = await res.json();
  console.log(res);
  console.log(result);
  if(res.ok){
    CampaignDiscountInput.value = '';
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: " کمپین مورد نظر با موفقیت افزوده شد",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "خطایی در روند ایجاد کمپین رخ داده است",
          showConfirmButton: false,
          timer: 2000,
        });
      }

};



const DeleteDiscount = async (offID) => {
  Swal.fire({
    title: "آیا برای حذف کد تخفیف مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#f43f5e",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "حذف",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}offs/${offID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
        GetAndShowAllDiscount();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "کد تخفیف مورد نظر با موفقیت حذف گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "خطایی در روند حذف کد تخفیف رخ داده است",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  });
};

export {
  SetCampaign,
  DeleteDiscount,
};
