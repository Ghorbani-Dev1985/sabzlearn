const courseContent = document.querySelector('.CourseFullDescSection')
const ShowFullDescBtn = document.querySelector('#ShowFullDescBtn')
const CourseFullDescShadow = document.querySelector('.CourseFullDescShadow')
const ShowMoreText = document.querySelector('#ShowMoreText')
const ShowMoreSvg = document.querySelector('#ShowMoreSvg')


ShowFullDescBtn.addEventListener('click' , () => {
    courseContent.classList.toggle('max-h-full')
    CourseFullDescShadow.classList.toggle('hidden')
    ShowMoreSvg.classList.toggle('rotate-180')
    if(ShowMoreSvg.classList.contains('rotate-180')){
        ShowMoreText.innerHTML = "مشاهده کمتر"
    }else{
        ShowMoreText.innerHTML = "مشاهده بیشتر"
    }
})
