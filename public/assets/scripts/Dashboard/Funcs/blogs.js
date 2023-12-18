import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let CategoryID = -1;
let BlogCover = null;
let ArticleBodyEditor = null;


const GetAllBlogs = async () => {
  const CountOfAllBlogs = $.querySelector("#CountOfAllBlogs");
  const AllBlogsTable = $.querySelector("#AllBlogsTable tbody");
  AllBlogsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}articles`);
  const articles = await res.json();
 CountOfAllBlogs.innerHTML = articles.length;
  let year, month, day;
  articles.forEach((article, index) => {
    year = article.createdAt.slice(0, 4);
    month = article.createdAt.slice(5, 7);
    day = article.createdAt.slice(8, 10);
    AllBlogsTable.insertAdjacentHTML(
      "beforeend",
      `
       <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 child:text-center even:dark:bg-gray-800 border-b dark:border-gray-700">
       <td class="px-6 py-4">
      ${index + 1}
       </td>
       <td class="font-DanaMd whitespace-nowrap leading-5 px-6 py-4">
        ${article.title}
       </td>
       <td class="font-DanaMd leading-5 px-6 py-4">
       <button class="flex-center gap-2 bg-amber-500 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-amber-500 border hover:border-amber-500 transition-colors" onclick='ShowBlogDescription(${JSON.stringify(article.description)})'> مشاهده</button>
      </td>
      <td class="font-DanaMd leading-5 px-6 py-4">
      <button class="flex-center gap-2 bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-sky-500 border hover:border-sky-500 transition-colors" onclick='ShowBlogBody(${JSON.stringify(article.body)})'> مشاهده</button>
      </td>
       <td class="font-DanaMd leading-5">
      <img src=http://localhost:4000/courses/covers/${
        article.cover
      } alt="ghorbani.dev.ir" />
      </td>
       <td class="px-6 py-4">
        ${ChangeGregorianDateToPersian(+year, +month, +day)}
       </td>
       <td class="px-6 py-4">
        ${article.creator.name}
       </td>
       <td class="px-6 py-4">
       ${article.creator.username}
      </td>
      <td class="px-6 py-4">
      ${article.creator.phone}
     </td>
     <td class="px-6 py-4">
     ${article.creator.email}
    </td>
    <td class="px-6 py-4">
     ${article.creator.role === "ADMIN" ? "مدیر سایت" : "کاربر"}
    </td>
    <td class="px-6 py-4">
    ${article.publish === 1 ? " منتشر شده" : "پیش نویس "}
   </td>
        <td class="px-6 py-4">
        <div onClick="DeleteBlog('${
          article._id
        }')" class="text-rose-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
        </div>
        </td>
     </tr>
       `
    );
  });

  return articles;
};

const ShowBlogDescription = (blogDescription) => {
  Swal.fire({
    text: blogDescription,
    inputPlaceholder: "متن توضیحات مقاله",
    showCancelButton: false,
    showConfirmButton: false,
  });
}

const ShowBlogBody = (blogBody) => {
  Swal.fire({
    text: blogBody,
    inputPlaceholder: "متن بدنه مقاله",
    showCancelButton: false,
    showConfirmButton: false,
  });
};

const PrepareCreateBlogFrom = async () => {
  const BlogCategoryList = $.querySelector("#BlogCategoryList");
  const BlogCoverUploader = $.querySelector("#BlogCoverUploader");
  const ShowFileNameUpload = $.querySelector("#ShowFileNameUpload");
  ClassicEditor
  .create( document.querySelector( '#editor' ) , {
    language: 'fa',
  }).then(editor => {
   ArticleBodyEditor = editor
  }).catch( error => {
      console.error( error );
  });


  const res = await fetch(`${BaseUrl()}category`);
  const categories = await res.json();
  console.log(categories);
  categories.forEach((category) => {
    BlogCategoryList.insertAdjacentHTML(
      "beforeend",
      `
       <option value=${category._id}>${category.title}</option>
      `
    );
  });
  BlogCategoryList.addEventListener(
    "change",
    (event) => (CategoryID = event.target.value)
  );
  BlogCoverUploader.addEventListener("change", (event) => {
    ShowFileNameUpload.innerHTML = event.target.files[0].name;
    BlogCover = event.target.files[0];
  });
};

const CreateNewBlog = async () => {
  const BlogNameInput = $.querySelector("#BlogNameInput");
  const BlogDescription = $.querySelector("#BlogDescription");
  const BlogShortNameInput = $.querySelector("#BlogShortNameInput");
  const formData = new FormData();
  formData.append("title", BlogNameInput.value.trim());
  formData.append("description", BlogDescription.value.trim());
  formData.append("shortName", BlogShortNameInput.value.trim());
  formData.append("body", ArticleBodyEditor.getData());
  formData.append("categoryID", CategoryID);
  formData.append("cover", BlogCover);
  if (
    BlogNameInput.value !== "" &&
    BlogDescription.value !== "" &&
    BlogShortNameInput.value !== '' &&
    ArticleBodyEditor.getData() !== '' &&
    BlogCover !== null &&
    CategoryID !== -1
  ) {
    const res = await fetch(`${BaseUrl()}articles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
      body: formData,
    });
    console.log(res);

    if (res.ok) {
      BlogNameInput.value = ""
      BlogDescription.value = ""
      BlogShortNameInput.value = ""
        Swal.fire({
          icon: "success",
          title: "مقاله جدید با موفقیت ثبت شد",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "مشاهده کلیه مقاله ها",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("ok");
            GetAllBlogs();
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "خطایی در روند ثبت مقاله جدید ایجاد گردید",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "لطفا  فرم را تکمیل نمایید",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

const DraftNewBlog = async () => {
  const BlogNameInput = $.querySelector("#BlogNameInput");
  const BlogDescription = $.querySelector("#BlogDescription");
  const BlogShortNameInput = $.querySelector("#BlogShortNameInput");
  const formData = new FormData();
  formData.append("title", BlogNameInput.value.trim());
  formData.append("description", BlogDescription.value.trim());
  formData.append("shortName", BlogShortNameInput.value.trim());
  formData.append("body", ArticleBodyEditor.getData());
  formData.append("categoryID", CategoryID);
  formData.append("cover", BlogCover);
  if (
    BlogNameInput.value !== "" &&
    BlogDescription.value !== "" &&
    BlogShortNameInput.value !== '' &&
    ArticleBodyEditor.getData() !== '' &&
    BlogCover !== null &&
    CategoryID !== -1
  ) {
    const res = await fetch(`${BaseUrl()}articles/draft`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
      body: formData,
    });
    console.log(res);

    if (res.ok) {
      BlogNameInput.value = ""
      BlogDescription.value = ""
      BlogShortNameInput.value = ""
        Swal.fire({
          icon: "success",
          title: "مقاله جدید با موفقیت پیش نویس شد",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "مشاهده کلیه مقاله ها",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("ok");
            GetAllBlogs();
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "خطایی در روند پیش نویس مقاله جدید ایجاد گردید",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "لطفا  فرم را تکمیل نمایید",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

const DeleteBlog = async (blogID) => {
  Swal.fire({
    title: "آیا برای حذف مقاله مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#f43f5e",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "حذف",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}articles/${blogID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
        GetAllBlogs();
        Swal.fire({
          icon: "success",
          title: "مقاله مورد نظر با موفقیت حذف گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "خطایی در روند حذف مقاله ایجاد گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  });
};

export {
  GetAllBlogs,
  ShowBlogBody,
  ShowBlogDescription,
  CreateNewBlog,
  DraftNewBlog,
  PrepareCreateBlogFrom,
  DeleteBlog,
};
