import {GetAndShowCourseDetails , GetAndShowRelatedCourse , NewCommentForCourse} from './Funcs/Sheared.js';
window.addEventListener('load' , () => {
    GetAndShowCourseDetails()
    GetAndShowRelatedCourse().then(data => {
        console.log(data);
    })
    NewCommentForCourse()
})

const $ = document;
const FullDescSection = $.querySelector('.FullDescSection')
const ShowFullDescBtn = $.querySelector('.ShowFullDescBtn')
const FullDescShadow = $.querySelector('.FullDescShadow')
const ShowMoreText = $.querySelector('.ShowMoreText')
const ShowMoreSvg = $.querySelector('.ShowMoreSvg')
const CopyLinkToClipboardBtn = $.querySelector('.CopyLinkToClipboardBtn')
const ShowSuccussToast = $.querySelector('.ShowSuccussToast')


ShowFullDescBtn.addEventListener('click' , () => {
    FullDescSection.classList.toggle('max-h-full')
    FullDescShadow.classList.toggle('hidden')
    ShowMoreSvg.classList.toggle('rotate-180')
    if(ShowMoreSvg.classList.contains('rotate-180')){
        ShowMoreText.innerHTML = "مشاهده کمتر"
    }else{
        ShowMoreText.innerHTML = "مشاهده بیشتر"
    }
})

CopyLinkToClipboardBtn.addEventListener('click' , ()=> {
    navigator.clipboard.writeText('https://sabzlearn.ir/?p=144');
    ShowSuccussToast.innerHTML = `<div id="toast-success" class="flex items-center w-full max-w-xs p-2 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    
</div>
<div class="ms-3 text-sm font-normal">با موفقیت کپی شد</div>
</div>`
 setTimeout(()=> {
    const toastSuccess = $.querySelector('#toast-success')
    toastSuccess.classList.add('hidden')
    ShowSuccussToast.innerHTML = "https://sabzlearn.ir/?p=144"
 }, 2000);
})