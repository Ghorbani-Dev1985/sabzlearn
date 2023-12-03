const courseContent = document.querySelector('.CourseFullDescSection')
const ShowFullDescBtn = document.querySelector('#ShowFullDescBtn')
const CourseFullDescShadow = document.querySelector('.CourseFullDescShadow')

ShowFullDescBtn.addEventListener('click' , () => {
    courseContent.classList.toggle('max-h-full')
    CourseFullDescShadow.classList.toggle('hidden')
})
