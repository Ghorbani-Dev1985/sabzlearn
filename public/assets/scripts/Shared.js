import { GetAndShowAllCourses , GetAndShowPopularCourses , GetAndShowPreSellCourses , GetAndShowArticles} from './Funcs/Sheared.js'

window.addEventListener('load', () => {
    GetAndShowAllCourses();
    GetAndShowPopularCourses();
    GetAndShowPreSellCourses();
    GetAndShowArticles();
})



{/* <li><a href="" class="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>              
صفحه اصلی</a></li>
<li>
<button type="button" id="frontEnd" class="flex-between w-full p-2 mb-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
   <div class="flex-center">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sky-500">
   <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
 </svg>                  
<span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">فرانت اند</span>
   </div>
    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>                
</button>
    <ul id="frontEndSubmenu" class="hidden p-5 space-y-4 py-4 bg-gray-100 rounded-md child:line-clamp-1">
       <li><a href="">آموزش HTML</a></li>
       <li><a href="">آموزش CSS</a></li>
       <li><a href="">آموزش FlexBox</a></li>
       <li><a href="">آموزش CssGrid</a></li>
       <li><a href="">مینی پروژه تخصصی با CSS</a></li>
       <li><a href="">آموزش TailwindCss</a></li>
       <li><a href="">آموزش اصولی طراحی قالب</a></li>
       <li><a href="">آموزش جاوااسکریپت </a></li>
       <li><a href="">آموزش جامع ریکت ReactJS</a></li>
       <li><a href="">  آموزش ویو جی اس </li>
       <li><a href="">  آموزش وی اس کد - Vscode </a></li>
    </ul>
</li>
<li>
<button type="button" id="Security" class="flex-between w-full p-2 mb-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
<div class="flex-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-rose-500">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>                  
<span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"> امنیت</span>
</div>
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>                
</button>
<ul id="SecuritySubmenu" class="hidden p-5 space-y-4 py-4 bg-gray-100 rounded-md child:line-clamp-1">
<li><a href="">نقشه راه ورود به دنیای هک و امنیت</a></li>
<li><a href="">شبکه با گرایش امنیت</a></li>
<li><a href="">لینوکس با گرایش امنیت</a></li>
<li><a href="" >آموزش هکر قانونمند - CEH V11 </a></li>
<li><a href=""> آموزش کالی لینوکس   </a></li>
<li><a href="">آموزش پایتون سیاه</a></li>
<li><a href="">آموزش  Burp Suite</a></li>
<li><a href="">آموزش جاوااسکریپت سیاه</a></li>
</ul>    
</li>
<li>
<button type="button" id="Blogs" class="flex-between w-full p-2 mb-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
<div class="flex-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-emerald-500">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>                  
<span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"> مقالات</span>
</div>
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>                
</button>
<ul id="BlogsSubmenu" class="hidden p-5 space-y-4 py-4 bg-gray-100 rounded-md child:line-clamp-1">
<li><a href="">اچ تی ام ال</a></li>
<li><a href="">پروژه های برنامه نویسی</a></li>
<li><a href="">تست نفوذ و امنیت وب</a></li>
<li><a href="" >ریکت جی اس </a></li>
<li><a href="">   سی اس اس   </a></li>
<li><a href="">  شروع برنامه نویسی</a></li>
<li><a href="">طراحی سایت </a></li>
<li><a href="">  ویو جی اس</a></li>
</ul>  
</li>
<li>
<button type="button" id="Python" class="flex-between w-full p-2 mb-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
<div class="flex-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-brown-600">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>                  
<span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"> پایتون</span>
</div>
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>                
</button>
<ul id="PythonSubmenu" class="hidden p-5 space-y-4 py-4 bg-gray-100 rounded-md child:line-clamp-1">
<li><a href="">دوره آموزش پایتون</a></li>
<li><a href="">پروژه های کاربردی با پایتون</a></li>
<li><a href="">ترفند های کاربردی پایتون</a></li>
<li><a href="" >متخصص جنگو</a></li>
<li><a href=""> مصور سازی داده با پایتون </a></li>

</ul> 
</li>
<li><a href="" class="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>
  
مهارت‌های نرم</a></li>
<li> */}