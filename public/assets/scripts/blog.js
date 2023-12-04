const $ = document;
const BlogFullDescSection = $.querySelector('.BlogFullDescSection')
const ShowFullDescBtn = $.querySelector('#ShowFullDescBtn')
const BlogFullDescShadow = $.querySelector('.BlogFullDescShadow')
const ShowMoreText = $.querySelector('.ShowMoreText')
const ShowMoreSvg = $.querySelector('.ShowMoreSvg')



ShowFullDescBtn.addEventListener('click' , () => {
    BlogFullDescSection.classList.toggle('max-h-full')
    BlogFullDescShadow.classList.toggle('hidden')
    ShowMoreSvg.classList.toggle('rotate-180')
    if(ShowMoreSvg.classList.contains('rotate-180')){
        ShowMoreText.innerHTML = "مشاهده کمتر"
    }else{
        ShowMoreText.innerHTML = "مشاهده بیشتر"
    }
})