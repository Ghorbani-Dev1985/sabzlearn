
const GetAndShowAllCourses = async () => {
    const ShowAllCourses = document.querySelector('#ShowAllCourses');
    const res = await fetch(`http://localhost:4000/v1/courses`);
    const Courses = await res.json();
    console.log(Courses);
    Courses.slice(0 , 6).map((course) => {
      
      ShowAllCourses.insertAdjacentHTML('beforeend' , `
      <!-- Courses Box -->

      <a id="CourseLink"
        class="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all ease-linear duration-200 hover:-mt-2"
      >
        <img
         src=${course.cover}
          alt="ghorbani-dev.ir"
        />
        <!-- Course Card Body -->
        <div class="px-2">
          <h2 id="CourseTitle" class="font-MorabbaBold text-base md:text-xl my-6 line-clamp-1">${course.name}</h2>
          <div class="flex-between mb-3">
            <div class="flex-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              <span>${course.creator}</span>
            </div>
            <div class="flex-center dir-ltr">
             ${
              Array(course.courseAverageScore).fill(0).map(score => `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>
              `).join('')
             }
             ${
              Array(5 - course.courseAverageScore).fill(0).map(score =>`
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            
              `).join('')
             }
            </div>
          </div>
          <div class="flex-between mb-3">
            <div class="flex-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <span>${course.registers}</span>
            </div>
            <div> 
            ${course.price === 0 ? `<span class='text-sabzlearnGreen font-DanaMd text-xl space-x-1.5'>رایگان!</span>` :  `<div class="flex-center gap-1 text-sabzlearnGreen font-DanaMd text-xl">${course.price.toLocaleString()}<img id="TomanSvg" src="./assets/images/svg/toman.svg" alt="ghorbani-dev.ir" class="w-5 h-5 null"></div>`}
             
            </div>
          </div>
        </div>
        <!-- Line -->
        <p class="w-full h-px bg-gray-200 my-2"></p>
        <!-- Link -->
        <div class="flex-center px-2 py-4 mb-2">
            <div class="flex-center gap-2 text-sabzlearnGreen font-DanaBold text-sm md:text-xl">
                مشاهده اطلاعات
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>                      
            </div>
        </div>
      </a>
      `)
    })
  }

const GetAndShowPopularCourses = async () => {
  const ShowAllCourses = document.querySelector('#NewCoursesBody');
  const res = await fetch(`http://localhost:4000/v1/courses/popular`);
  const Courses = await res.json();
  console.log(Courses);
  Courses.slice(0 , 6).map((course) => {
    
    ShowAllCourses.insertAdjacentHTML('beforeend' , `
    <div class="swiper-slide">
    <div class="flex flex-col overflow-hidden bg-white shadow-light rounded-xl min-h-[415px]">
    <div class="relative">
      <a id="NewCourseLink" class="w-full h-full block">
        <img src=${course.cover} alt="ghorbani-dev.ir" />
        <span class="absolute right-2.5 top-2.5 hidden w-12 h-6 bg-sabzlearnGreen text-white rounded-xl font-DanaBold text-sm"> ${course.price === 0 && '100%' }</span>
        <div class="px-5 pt-3.5 pb-2.5">
       
        <a id="NewCourseTagOne" href="" class="inline-flex items-center justify-center text-xs text-sky-500 dark:text-yellow-400 bg-sky-500/10 dark:bg-yellow-400/10 py-1 px-1.5 mb-2.5 rounded">
                  </a>
        <a id="NewCourseTagTwo" href="" class="inline-flex items-center justify-center text-xs text-sky-500 dark:text-yellow-400 bg-sky-500/10 dark:bg-yellow-400/10 py-1 px-1.5 mb-2.5 rounded">
                     </a>
          <h4 id="NewCourseTitle" class="font-DanaBold h-12 line-clamp-2 text-zinc-700 mb-3">${course.name}</h4>
          <p class="font-Dana text-sm h-10 line-clamp-2 text-slate-500 dark:text-slate-400">${course.description}</p>
          <div class="flex-between gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs my-3">
                <div class="flex-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                    <span> ${course.creator}</span>         
                </div>

                <div class="flex justify-end dir-ltr">
                ${
                  Array(course.courseAverageScore).fill(0).map(score => `
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                  `).join('')
                 }
                 ${
                  Array(5 - course.courseAverageScore).fill(0).map(score =>`
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                
                  `).join('')
                 }
                 </div>
              </div>
              <!-- line -->
              <p class="w-full h-px bg-gray-200 my-2"></p>
              <div class="w-full flex-between h-[46px]">
                    <div class="flex-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                      <span class="font-DanaMd text-lg">${course.registers}</span>
                    </div>
                    <div class="flex flex-col items-center">
                    
                     <div class="flex-center gap-1 ">
                     <span id="NewCourseDiscountPrice" class="text-sabzlearnGreen font-DanaMd text-xl space-x-1.5">
                     ${course.price === 0 ? `<span class='text-sabzlearnGreen font-DanaMd text-xl space-x-1.5'>رایگان!</span>` :  `<div class="flex-center gap-1 text-sabzlearnGreen font-DanaMd text-xl">${course.price.toLocaleString()}<img id="TomanSvg" src="./assets/images/svg/toman.svg" alt="ghorbani-dev.ir" class="w-5 h-5 null"></div>`}
                     </span>
                     </div>
                    </div>
              </div>
          </div>
        </div>
      </a>
    </div>
    </div>
    </div>
    `)
  })
}


export {GetAndShowAllCourses ,GetAndShowPopularCourses}