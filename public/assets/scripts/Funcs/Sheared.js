import { GetUrlParam, GetToken , ShowSwalAlert} from "../Funcs/Utils.js";

const GetAndShowAllCourses = async () => {
  const ShowAllCourses = document.querySelector("#ShowAllCourses");
  const res = await fetch(`http://localhost:4000/v1/courses`);
  const Courses = await res.json();
  Courses.slice(0, 6).map((course) => {
    ShowAllCourses.insertAdjacentHTML(
      "beforeend",
      `
      <!-- Courses Box -->

      <a href="course-info.html?name=${course.shortName}" target="_blank"
        class="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all ease-linear duration-200 hover:-mt-2"
      >
        <img
         src=${course.cover}
          alt="ghorbani-dev.ir"
        />
        <!-- Course Card Body -->
        <div class="px-2">
          <h2 class="font-MorabbaBold text-base md:text-xl my-6 line-clamp-1">${
            course.name
          }</h2>
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
             ${Array(course.courseAverageScore)
               .fill(0)
               .map(
                 (score) => `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>
              `
               )
               .join("")}
             ${Array(5 - course.courseAverageScore)
               .fill(0)
               .map(
                 (score) => `
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            
              `
               )
               .join("")}
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
            ${
              course.price === 0
                ? `<span class='text-sabzlearnGreen font-DanaMd text-xl space-x-1.5'>رایگان!</span>`
                : `<div class="flex-center gap-1 text-sabzlearnGreen font-DanaMd text-xl">${course.price.toLocaleString()}<img id="TomanSvg" src="./assets/images/svg/toman.svg" alt="ghorbani-dev.ir" class="w-5 h-5 null"></div>`
            }
             
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
      `
    );
  });
};

const GetAndShowPopularCourses = async () => {
  const ShowAllCourses = document.querySelector("#NewCoursesBody");
  const res = await fetch(`http://localhost:4000/v1/courses/popular`);
  const Courses = await res.json();
  Courses.slice(0, 6).map((course) => {
    ShowAllCourses.insertAdjacentHTML(
      "beforeend",
      `
    <div class="swiper-slide">
    <div class="flex flex-col overflow-hidden bg-white shadow-light rounded-xl min-h-[415px]">
    <div class="relative">
      <a id="NewCourseLink" class="w-full h-full block">
        <img src=${course.cover} alt="ghorbani-dev.ir" />
        <span class="absolute right-2.5 top-2.5 hidden w-12 h-6 bg-sabzlearnGreen text-white rounded-xl font-DanaBold text-sm"> ${
          course.price === 0 && "100%"
        }</span>
        <div class="px-5 pt-3.5 pb-2.5">
       
        <a id="NewCourseTagOne" href="" class="inline-flex items-center justify-center text-xs text-sky-500 dark:text-yellow-400 bg-sky-500/10 dark:bg-yellow-400/10 py-1 px-1.5 mb-2.5 rounded">
                  </a>
        <a id="NewCourseTagTwo" href="" class="inline-flex items-center justify-center text-xs text-sky-500 dark:text-yellow-400 bg-sky-500/10 dark:bg-yellow-400/10 py-1 px-1.5 mb-2.5 rounded">
                     </a>
          <h4 id="NewCourseTitle" class="font-DanaBold h-12 line-clamp-2 text-zinc-700 mb-3">${
            course.name
          }</h4>
          <p class="font-Dana text-sm h-10 line-clamp-2 text-slate-500 dark:text-slate-400">${
            course.description
          }</p>
          <div class="flex-between gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs my-3">
                <div class="flex-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                    <span> ${course.creator}</span>         
                </div>

                <div class="flex justify-end dir-ltr">
                ${Array(course.courseAverageScore)
                  .fill(0)
                  .map(
                    (score) => `
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                  `
                  )
                  .join("")}
                 ${Array(5 - course.courseAverageScore)
                   .fill(0)
                   .map(
                     (score) => `
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                
                  `
                   )
                   .join("")}
                 </div>
              </div>
              <!-- line -->
              <p class="w-full h-px bg-gray-200 my-2"></p>
              <div class="w-full flex-between h-[46px]">
                    <div class="flex-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                      <span class="font-DanaMd text-lg">${
                        course.registers
                      }</span>
                    </div>
                    <div class="flex flex-col items-center">
                    
                     <div class="flex-center gap-1 ">
                     <span id="NewCourseDiscountPrice" class="text-sabzlearnGreen font-DanaMd text-xl space-x-1.5">
                     ${
                       course.price === 0
                         ? `<span class='text-sabzlearnGreen font-DanaMd text-xl space-x-1.5'>رایگان!</span>`
                         : `<div class="flex-center gap-1 text-sabzlearnGreen font-DanaMd text-xl">${course.price.toLocaleString()}<img id="TomanSvg" src="./assets/images/svg/toman.svg" alt="ghorbani-dev.ir" class="w-5 h-5 null"></div>`
                     }
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
    `
    );
  });
};

const GetAndShowPreSellCourses = async () => {
  const ShowAllCourses = document.querySelector("#PreSellCoursesBody");
  const res = await fetch(`http://localhost:4000/v1/courses/presell`);
  const Courses = await res.json();
  Courses.slice(0, 6).map((course) => {
    ShowAllCourses.insertAdjacentHTML(
      "beforeend",
      `
    <div class="swiper-slide">
    <div class="flex flex-col overflow-hidden bg-white shadow-light rounded-xl min-h-[415px]">
    <div class="relative">
      <a id="NewCourseLink" class="w-full h-full block">
        <img src=${course.cover} alt="ghorbani-dev.ir" />
        <span class="absolute right-2.5 top-2.5 hidden w-12 h-6 bg-sabzlearnGreen text-white rounded-xl font-DanaBold text-sm"> ${
          course.price === 0 && "100%"
        }</span>
        <div class="px-5 pt-3.5 pb-2.5">
       
        <a id="NewCourseTagOne" href="" class="inline-flex items-center justify-center text-xs text-sky-500 dark:text-yellow-400 bg-sky-500/10 dark:bg-yellow-400/10 py-1 px-1.5 mb-2.5 rounded">
                  </a>
        <a id="NewCourseTagTwo" href="" class="inline-flex items-center justify-center text-xs text-sky-500 dark:text-yellow-400 bg-sky-500/10 dark:bg-yellow-400/10 py-1 px-1.5 mb-2.5 rounded">
                     </a>
          <h4 id="NewCourseTitle" class="font-DanaBold h-12 line-clamp-2 text-zinc-700 mb-3">${
            course.name
          }</h4>
          <p class="font-Dana text-sm h-10 line-clamp-2 text-slate-500 dark:text-slate-400">${
            course.description
          }</p>
          <div class="flex-between gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs my-3">
                <div class="flex-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                    <span> ${course.creator}</span>         
                </div>

                <div class="flex justify-end dir-ltr">
                ${Array(course.courseAverageScore)
                  .fill(0)
                  .map(
                    (score) => `
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                  `
                  )
                  .join("")}
                 ${Array(5 - course.courseAverageScore)
                   .fill(0)
                   .map(
                     (score) => `
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                
                  `
                   )
                   .join("")}
                 </div>
              </div>
              <!-- line -->
              <p class="w-full h-px bg-gray-200 my-2"></p>
              <div class="w-full flex-between h-[46px]">
                    <div class="flex-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                      <span class="font-DanaMd text-lg">${
                        course.registers
                      }</span>
                    </div>
                    <div class="flex flex-col items-center">
                    
                     <div class="flex-center gap-1 ">
                     <span id="NewCourseDiscountPrice" class="text-sabzlearnGreen font-DanaMd text-xl space-x-1.5">
                     ${
                       course.price === 0
                         ? `<span class='text-sabzlearnGreen font-DanaMd text-xl space-x-1.5'>رایگان!</span>`
                         : `<div class="flex-center gap-1 text-sabzlearnGreen font-DanaMd text-xl">${course.price.toLocaleString()}<img id="TomanSvg" src="./assets/images/svg/toman.svg" alt="ghorbani-dev.ir" class="w-5 h-5 null"></div>`
                     }
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
    `
    );
  });
};

const GetAndShowArticles = async () => {
  const ShowAllArticles = document.querySelector("#ShowArticlesBody");
  const res = await fetch(`http://localhost:4000/v1/articles`);
  const Articles = await res.json();
  Articles.slice(0, 4).map((article) => {
    ShowAllArticles.insertAdjacentHTML(
      "beforeend",
      `
    <div class="bg-white rounded-lg shadow-light p-3">
<div class="before:bg-blog-banner after:bg-blog-banner before:content-[''] before:absolute before:-bottom-3 before:left-0 before:w-full before:h-full after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-full relative h-[217px] overflow-hidden">
  <img src=http://localhost:4000/courses/covers/${article.cover} alt="ghorbani-dev.ir" class="block w-full rounded-lg h-full object-cover"/>
</div>
<h4 class="font-DanaMd h-14 max-h-14 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">${article.title}
</h4>
<p class="font-danaLight text-sm h-20 line-clamp-4 text-slate-500 dark:text-slate-400">${article.description}</p>
<div class="flex flex-col items-start gap-2.5 text-slate-500 dark:text-slate-400 text-xs my-2">
  <div class="flex-center gap-x-1 hover:text-primary transition-colors cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>            
   <span>${article.creator.name}</span> 
  </div>
  <div class="w-full flex items-center gap-x-1 dir-ltr">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>            
  <span>${article.createdAt}</span>
  </div>
</div>
<!-- line -->
<p class="w-full h-px bg-gray-200 my-2"></p>
<div class="flex-center py-3.5">
  <a id="BlogLink" class="flex-center gap-1 text-zinc-700 dark:text-white hover:text-sabzlearnGreen dark:hover:text-sabzlearnGreen space-x-2.5 font-DanaMd transition-colors">
    مطالعه مقاله
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
    </svg>            
  </a>
</div>
</div>
    `
    );
  });
};

const GetAndShowCategoryCourses = async () => {
  const categoryUrlName = GetUrlParam("cat");
  const ShowAllCoursesOfCat = document.querySelector("#ShowAllCoursesOfCat");
  const res = await fetch(`http://localhost:4000/v1/courses/category/${categoryUrlName}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    }
  );
  const courses = await res.json();
  console.log(courses);
  courses.forEach((course) => {
    ShowAllCoursesOfCat.insertAdjacentHTML(
      "beforeend",
      `
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
          <h2 id="CourseTitle" class="font-MorabbaBold text-base md:text-xl my-6 line-clamp-1">${
            course.name
          }</h2>
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
             ${Array(course.courseAverageScore)
               .fill(0)
               .map(
                 (score) => `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>
              `
               )
               .join("")}
             ${Array(5 - course.courseAverageScore)
               .fill(0)
               .map(
                 (score) => `
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            
              `
               )
               .join("")}
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
            ${
              course.price === 0
                ? `<span class='text-sabzlearnGreen font-DanaMd text-xl space-x-1.5'>رایگان!</span>`
                : `<div class="flex-center gap-1 text-sabzlearnGreen font-DanaMd text-xl">${course.price.toLocaleString()}<img id="TomanSvg" src="./assets/images/svg/toman.svg" alt="ghorbani-dev.ir" class="w-5 h-5 null"></div>`
            }
             
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
      `
    );
  });
  return courses;
};

const GetAndShowCourseDetails = async () => {
  const courseUrlName = GetUrlParam("name");
  // Select Elements From Dom
  const $ = document;
  const CorseCategoryName = $.querySelector("#CorseCategoryName");
  const CourseTitle = $.querySelectorAll(".CourseTitle");
  const CourseDescription = $.querySelectorAll(".CourseDescription");
  const CoursePrice = $.querySelector("#CoursePrice");
  const CourseActionBtn = $.querySelector("#CourseActionBtn");
  const CourseVideo = $.querySelector('#CourseVideo');
  const CourseStatus = $.querySelector("#CourseStatus");
  const CourseSupportWay = $.querySelector("#CourseSupportWay");
   const CourseLastUpdated = $.querySelector("#CourseLastUpdated");
   const CourseTime = $.querySelector("#CourseTime");
   const CourseStudentsCount = $.querySelector("#CourseStudentsCount");
 const CourseTeacherName = $.querySelector("#CourseTeacherName");
const CourseTeacherEmail = $.querySelector("#CourseTeacherEmail");
 const CourseCommentsCount = $.querySelector("#CourseCommentsCount");
const TopicsCollapse = $.querySelector("#TopicsCollapse");

  const res = await fetch(`http://localhost:4000/v1/courses/${courseUrlName}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  })
    .then((res) => res.json())
    .then((course) => {
      console.log(course);
      CorseCategoryName.innerHTML = course.categoryID.title;
      CourseTitle.forEach((title) => {
        title.innerHTML = course.name;
      });
      CourseDescription.forEach((desc) => {
        desc.innerHTML = course.description
      })

      if (course.price !== 0) {
        CoursePrice.innerHTML = `
         <span  class="font-DanaBold font-bold text-base md:text-3xl"
         >${course.price.toLocaleString()}
       </span>
       <img
         src="./assets/images/svg/toman-black.svg"
         class="w-6 h-6 object-cover"
       />
         `;
      } else {
        CoursePrice.innerHTML = `<span class="text-sabzlearnGreen font-DanaBold text-base md:text-3xl space-x-1.5">رایگان!</span>`;
      }
      CourseActionBtn.insertAdjacentHTML(
        "beforeend",
        course.isUserRegisteredToThisCourse
          ? `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>
مشاهده دوره
        `
          : ` <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-10 h-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
    شرکت در دوره`
      );
      CourseVideo.setAttribute('poster' , `${course.cover}`)
      CourseStatus.innerHTML = course.isCompleted ?" تکمیل شده" : "در حال برگزاری";
      CourseSupportWay.innerHTML = course.support;
      CourseLastUpdated.innerHTML = course.updatedAt.slice(0,10);
       let sum = 0;
      course.sessions.forEach((session) => {
        sum += +session.time.slice(0 , 2)
      });
      CourseTime.innerHTML = `${sum} ساعت`;
      CourseStudentsCount.innerHTML = course.courseStudentsCount;
      CourseTeacherName.innerHTML = course.creator.name;
      CourseTeacherEmail.innerHTML = course.creator.email;
      CourseCommentsCount.innerHTML = course.comments.length;


       course.sessions.length ? course.sessions.forEach((session , index) =>{
        TopicsCollapse.insertAdjacentHTML('beforeend' , ` 
       <details
       class="collapse bg-gray-100 border border-gray-100 my-3"
     >
       <summary class="collapse-title">
        <div class="flex gap-2 text-xl font-DanaMd font-medium">
         <div
       class="flex items-center justify-center shrink-0 w-5 h-5 md:w-7 md:h-7 bg-white font-DanaBold text-xs md:text-base text-zinc-700 dark:text-white dark:bg-gray-800 group-hover:bg-sabzlearnGreen group-hover:text-white rounded-md transition-colors"
       >${index+1}</div>
       <div>${session.title}</div>
        </div>
      
     </summary>
     <div class="collapse-content">
       <div
         class="md:flex items-center gap-2.5 flex-wrap space-y-3.5 md:space-y-0 py-4 md:py-6 px-3.5 md:px-5 group"
       >
         ${
          (session.free || course.isUserRegisteredToThisCourse) ? ` <a
           href="episode.html?name=${course.shortName}&id=${session._id}" target="_blank"
           class="flex items-center gap-x-1.5 md:gap-x-2.5 shrink-0 w-[85%]"
         >
          
           <h4
             class="text-zinc-700 dark:text-white group-hover:text-sabzlearnGreen text-sm md:text-lg transition-colors"
           >
           ${session.title}
           </h4>
         </a>` : ` <span
        
         class="flex items-center gap-x-1.5 md:gap-x-2.5 shrink-0 w-[85%]"
       >
        
         <h4
           class="text-zinc-600 dark:text-white text-sm md:text-lg opacity-40"
         >
         ${session.title}
         </h4>
       </span>`
         }
        
         <div class="flex items-center w-full justify-between">
          ${session.free || course.isUserRegisteredToThisCourse ? `<span
             class="inline-block h-[25px] leading-[25px] px-2.5 bg-gray-200 dark:bg-slate text-zinc-700 dark:text-white group-hover:bg-sabzlearnGreen/10 group-hover:text-sabzlearnGreen text-xs rounded transition-colors"
             >جلسه رایگان</span
           >`: `<span
             class="inline-block leading-[25px] px-2.5 py-2 bg-gray-200 dark:bg-slate text-zinc-700 dark:text-white group-hover:bg-sabzlearnGreen/10 group-hover:text-sabzlearnGreen text-xs rounded transition-colors"
             ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
             <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
           </svg>
           </span
           >`}
           
           <div class="flex items-center gap-x-1.5 md:gap-x-2">
             <span
               class="text-slate-500 dark:text-gray-500 text-sm md:text-lg"
             >
            ${session.time}
             </span>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-5 h-6 md:w-6 md:h-6 text-zinc-700 dark:text-white group-hover:text-sabzlearnGreen transition-colors"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               />
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
               />
             </svg>
           </div>
         </div>
       </div>
     </div></details>`)
      }) : TopicsCollapse.innerHTML= "تاکنون سرفصلی ثبت نگردیده است";
    });
};

const GetAndShowRelatedCourse = async () => {
  const courseUrlName = GetUrlParam("name");
  const RelatedCourseBody = document.querySelector('#RelatedCourseBody')

  const res = await fetch(`http://localhost:4000/v1/courses/related/${courseUrlName}`)
  const RelatedCourses = await res.json();
  if(RelatedCourses.length){
    RelatedCourses.forEach((related) => {
      RelatedCourseBody.insertAdjacentHTML('beforeend' , `
      <a class="flex-between my-2" href="course-info.html?name=${related.shortName}">
      <img src="${related.cover}" class="w-28 rounded-md" alt="ghorbani-dev.ir"/>
      <span class="flex flex-1 mr-2">${related.name}</span>
      </a>
      `)
    })
  }else{

  }


  return RelatedCourses;
}

const GetSessionDetails = async () => {
  const CourseShortName = GetUrlParam('name')
  const SessionID = GetUrlParam('id')
  const $ = document;
  const SessionTitle = $.querySelector('.SessionTitle');
  const SessionVideo = $.querySelector('#SessionVideo');
  const SessionsBody = $.querySelector('#SessionsBody');

  const res = await fetch(`http://localhost:4000/v1/courses/${CourseShortName}/${SessionID}` , {
    headers: {
      Authorization : `Bearer ${GetToken()}`
    }
  })
  const responseData = await res.json();
  SessionTitle.innerHTML = responseData.session.title
  console.log(responseData);
  SessionVideo.setAttribute('src' , `http://localhost:4000/courses/covers/${responseData.session.video}`)
  responseData.sessions.forEach((session) => {
    console.log(session);
    SessionsBody.insertAdjacentHTML('beforeend' , `
    ${
      session.free ? ` <a href="episode.html?name=${CourseShortName}&id=${SessionID}" class="flex-between bg-green-50 p-2 my-4 rounded-lg"><div class="flex-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
   <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
 </svg>
      <span class="font-DanaBold">${session.title}</span></div>
      <div>${session.time}</div>
     </a>`: `<div class="flex-between bg-green-50 p-2 my-4 rounded-lg"><div class="flex-center gap-1">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f43f5e" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>
     <span class="font-DanaBold">${session.title}</span></div>
     <div>${session.time}</div>
    </div>`
    }
    `)
  })




  return responseData
  
}

const SendTicketMessage = async () => {
  const $ = document;
  const FullNameInput = $.querySelector('#FullNameInput')
  const PhoneNumberInput = $.querySelector('#PhoneNumberInput')
  const EmailInput = $.querySelector('#EmailInput')
  const MessageTextarea = $.querySelector('#MessageTextarea')

  const NewSendTicketInfos = {
    name : FullNameInput.value.trim(),
    phone : PhoneNumberInput.value.trim(),
    email : EmailInput.value.trim(),
    body : MessageTextarea.value.trim(),
  }
  if (FullNameInput.value === '' || FullNameInput.value === '' || EmailInput.value === '' ||  MessageTextarea.value === ''){
    ShowSwalAlert("info" , 'لطفا فرم را کامل تکمیل نمایید')
  }else{
    const res = await fetch(`http://localhost:4000/v1/contact` , {
       method: 'POST',
       headers: {
           'Content-Type' : 'application/json'
       },
       body: JSON.stringify(NewSendTicketInfos)
   })
   const result = await res.json();
   if(res.status === 201) {
    ShowSwalAlert("success" , ' پیام شما با موفقیت ثبت شد' , 
      () => location.href = 'index.html')
   }else{
    ShowSwalAlert("error" , 'خطایی در ارسال پیام رخ داده است')
   }
  }

}

export {
  GetAndShowAllCourses,
  GetAndShowPopularCourses,
  GetAndShowPreSellCourses,
  GetAndShowArticles,
  GetAndShowCategoryCourses,
  GetAndShowCourseDetails,
  GetAndShowRelatedCourse,
  GetSessionDetails,
  SendTicketMessage,
};
