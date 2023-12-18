import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;


const SetCampaign = async () => {
  const CampaignDiscountInput = $.querySelector("#ShowAllOrdersTable tbody");
  const NullData = $.querySelector('.NullData');
  const res = await fetch(`${BaseUrl()}orders` , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  });
  const Orders = await res.json();
  console.log(res);
  console.log(Orders);
  let year, month, day;
  if(Orders.length){
      Orders.forEach((order , index) => {
    year = order.createdAt.slice(0, 4);
    month = order.createdAt.slice(5, 7);
    day = order.createdAt.slice(8, 10);
    CampaignDiscountInput.insertAdjacentHTML('beforeend' , `
    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 child:text-center even:dark:bg-gray-800 border-b dark:border-gray-700">
    <td>${index + 1}</td>
    <td class="px-6 py-4">
       ${ChangeGregorianDateToPersian(+year , +month , +day)}
    </td>
    <td class="px-6 py-4">
    <img src='http://localhost:4000/courses/covers/${order.course.cover}' alt="ghorbani-dev.ir" class="w-16 h-10 object-cover rounded-lg"/>    
    </td>
    <td class="px-6 py-4">
        ${order.course.name}
    </td>
    <td class="px-6 py-4">
       ${
        order.course.status === "start" ? "درحال برگزاری" : " در حال پیش فروش"
       }
    </td>
    <td>
     ${order.price === 0 ? `<span class="text-sabzlearnGreen font-DanaMd text-xl space-x-1.5">رایگان!</span>` : `${order.price.toLocaleString()}` }
    </td>
    <td>
     ${order.course.support}
    </td>
  </tr>
    `)

  })
  }else{
    NullData.innerHTML = `اطلاعاتی برای نمایش وجود ندارد`
  }
  


};



export {
  SetCampaign,
};
