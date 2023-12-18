import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let year, month, day;


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
    <img src='http://localhost:4000/courses/covers/${order.course.cover}' alt="ghorbani-dev.ir" class="w-25 h-16 object-cover rounded-lg"/>    
    </td>
    <td class="px-6 py-4">
        ${order.course.name}
    </td>

    <td class="px-6 py-4">
     ${order.price === 0 ? `<span class="text-sabzlearnGreen font-DanaMd text-xl space-x-1.5">رایگان!</span>` : `${order.price.toLocaleString()}` }
    </td>
    <td class="px-6 py-4">
    <label onclick='ShowOrderDetails(${JSON.stringify(order._id)})' for="my_modal_7" class="flex-center bg-sky-500 text-white px-2 py-1 rounded-lg hover:bg-white hover:text-sky-500 border hover:border-sky-500 transition-colors"> مشاهده</label>
    </td>
  </tr>
    `)

  })
  }else{
    NullData.innerHTML = `اطلاعاتی برای نمایش وجود ندارد`
  }
  


};

const ShowOrderDetails = async (orderID) => {
  const OrderTitle = $.querySelector('#OrderTitle');
   const ShowOneOrderTable = $.querySelector('#ShowOneOrderTable tbody');
  const res = await fetch(`${BaseUrl()}orders/${orderID}` , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  });
  const OrderDetails = await res.json();
  console.log(OrderDetails);
  ShowOneOrderTable.innerHTML = '';
  OrderDetails.forEach(OrderDetail => {
    year = OrderDetail.createdAt.slice(0, 4);
    month = OrderDetail.createdAt.slice(5, 7);
    day = OrderDetail.createdAt.slice(8, 10);
    OrderTitle.innerHTML = `سفارش <span class="bg-amber-100 text-amber-500 rounded-lg px-2 py-1 font-bold mx-1">${OrderDetail._id.slice(0 , 6)} </span> در تاریخ <span class="bg-emerald-100 text-emerald-500 rounded-lg px-2 py-1 font-bold mx-1">${ChangeGregorianDateToPersian(+year , +month , +day)}</span> ثبت شده و در حال حاضر در وضعیت <span class="bg-emerald-100 text-emerald-500 rounded-lg px-2 py-1 font-bold mx-1">تکمیل شده</span> قرار دارد`;
    ShowOneOrderTable.insertAdjacentHTML('beforeend' , `
    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 child:text-center even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td class="px-6 py-4">
       ${OrderDetail.course.shortName}
      </td>
      <td class="px-6 py-4">
      ${OrderDetail.course.isComplete ? 'تکمیل شده' : 'در حال ضبط'}
     </td>
       <td class="px-6 py-4">
       ${
        OrderDetail.course.status === "start" ? "درحال برگزاری" : " در حال پیش فروش"
       }
     </td>
     <td class="px-6 py-4">
     ${
      OrderDetail.course.support
     }
   </td>
     <td class="px-6 py-4">
     ${
      OrderDetail.course.discount ? `${OrderDetail.course.discount}%` : 'بدون تخفیف'
     }
   </td>
    </tr>
    `)
  })

}


export {
  SetCampaign,
  ShowOrderDetails,
};
