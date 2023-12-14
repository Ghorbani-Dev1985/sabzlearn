const BaseUrl = () => {
   return `http://localhost:4000/v1/`;
}

const ShowSwalAlert = ( icon, title ,text, callback) => {
    Swal.fire({
        position: "top-center",
        icon: icon,
        title: title,
        text : text,
        showConfirmButton: false,
        timer: 2500
      }).then(result => callback(result))
}

const SaveIntoLocalStorage = (key , value) => {
  return localStorage.setItem(key , JSON.stringify(value))
}

const GetFromLocalStorage = (key) => {
    return JSON.stringify(localStorage.getItem(key))
}

const GetToken = () => {
    const userToken =  JSON.parse(localStorage.getItem('user'))
    return userToken ? userToken.token : null 
}

const isLogin = () => {
    const userInfos = localStorage.getItem('user');
    return userInfos ? true : false;
}

const GetUrlParam = key => {
   const urlParams = new URLSearchParams(window.location.search)
   return urlParams.get(key)
}

const addParamToUrl = (param , value) => {
   let url = new URL(location.href);
   let searchParams = url.searchParams;
   searchParams.set(param , value);
   url.search = searchParams.toString();
   location.href = url.toString();
}


const PaginationItems = (Array , ItemsPerPage , PaginationParentEle , CurrentPage) => {
  PaginationParentEle.innerHTML = '';
  let endIndex = ItemsPerPage * CurrentPage;
  let startIndex = endIndex - ItemsPerPage;
  let paginatedItems = Array.slice(startIndex , endIndex);
  let paginatedCount = Math.ceil(Array.length / ItemsPerPage);
  for(let i = 1; i < paginatedCount +1 ; i++){
    PaginationParentEle.insertAdjacentHTML('beforeend' , ` 
    <li>
    ${
        i === +CurrentPage ? `<a href="#" onClick="addParamToUrl('page' , ${i})" class="flex-center rounded-md bg-emerald-50 px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${i}</a>` : `<a href="#" onClick="addParamToUrl('page' , ${i})" class="flex-center rounded-md px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${i}</a>`
    }
      
    </li>
`)
  }
  return paginatedItems
}

export { ShowSwalAlert , SaveIntoLocalStorage , GetFromLocalStorage , GetToken , isLogin , GetUrlParam , PaginationItems , addParamToUrl , BaseUrl} 
