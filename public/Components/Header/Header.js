const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<!-- desktop menu -->
<header class="hidden md:block">
    <!-- top header -->
    <section class="bg-gray-100">      
        <div class="container">
            <!-- top nav container -->
         <div class="flex justify-between items-center py-4 text-sm">
            <!-- right side -->
            <div>
               <nav>
                 <ul class="flex items-center gap-x-3">
                    <li><a href="">آموزش HTML</a></li>
                    <li><a href="">آموزش CSS</a></li>
                    <li><a href="">آموزش TailwindCss</a></li>
                    <li><a href="">آموزش جاوااسکریپت</a></li>
                    <li><a href="">آموزش پایتون</a></li>
                    <li><a href="">آموزش ریکت</a></li>
                    <li class="flex-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sabzlearnGreen">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                          </svg>
                           2000 تومان                          
                    </li>
                 </ul>
               </nav> 
            </div>
             <!-- left side -->
            <div class="flex-center gap-4 dir-ltr">
                <div class="flex-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sabzlearnGreen">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                   <a href="mailto:sabzlearn@gmail.com">sabzlearn@gmail.com</a>   
                </div>
                <div class="flex-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sabzlearnGreen">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    <a href="to:09334008385">09334008385</a>                      
                </div>
            </div>
         </div>
        </div>
    </section>
    <!-- main header -->
    <section class="container">
        <div class="flex-between gap-4 py-6">
            <div class="flex-center gap-2">
               <!-- right side -->
               <img src="./assets/images/logo/Logo.png" alt="logo" />
               <nav>
                <ul class="flex-center gap-3">
                    <li><a href="">صفحه اصلی</a></li>
                    <li class="group relative"><a href="" class="flex-center gap-1">فرانت اند
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>                              
                    </a>
                     <ul class="w-64 p-5 space-y-4 bg-slate-100 dark:bg-zinc-700 rounded-2xl border-b-4 border-sabzlearnGreen opacity-0 invisible absolute top-full shadow-6 dark:shadow-none group-hover:opacity-100 group-hover:visible transition-all delay-75 child:line-clamp-1">
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
                    <li class="group relative"><a href="" class="flex-center gap-1">امنیت
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>  
                    </a>
                    <ul class="w-64 p-5 space-y-4 bg-slate-100 dark:bg-zinc-700 rounded-2xl border-b-4 border-sabzlearnGreen opacity-0 invisible absolute top-full shadow-6 dark:shadow-none group-hover:opacity-100 group-hover:visible transition-all delay-75 child:line-clamp-1">
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
                    <li class="group relative"><a href="" class="flex-center gap-1">مقالات
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>  
                    </a>
                    <ul class="w-64 p-5 space-y-4 bg-slate-100 dark:bg-zinc-700 rounded-2xl border-b-4 border-sabzlearnGreen opacity-0 invisible absolute top-full shadow-6 dark:shadow-none group-hover:opacity-100 group-hover:visible transition-all delay-75 child:line-clamp-1">
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
                    <li class="group relative"><a href="" class="flex-center gap-1">پایتون
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>  
                    </a>
                    <ul class="w-64 p-5 space-y-4 bg-slate-100 dark:bg-zinc-700 rounded-2xl border-b-4 border-sabzlearnGreen opacity-0 invisible absolute top-full shadow-6 dark:shadow-none group-hover:opacity-100 group-hover:visible transition-all delay-75 child:line-clamp-1">
                        <li><a href="">دوره آموزش پایتون</a></li>
                        <li><a href="">پروژه های کاربردی با پایتون</a></li>
                        <li><a href="">ترفند های کاربردی پایتون</a></li>
                        <li><a href="" >متخصص جنگو</a></li>
                        <li><a href=""> مصور سازی داده با پایتون </a></li>

                     </ul> 
                </li>
                    <li><a href="">مهارت‌های نرم</a></li>
                </ul>
               </nav>
            </div>
            <!-- left side -->
            <div class="flex-center gap-2">
              
                <a href="#" class="bg-sabzlearnGreen block w-9 h-9 rounded-md flex-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                </a>
                <a href="#" class="bg-gray-200 block w-9 h-9 rounded-md flex-center relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span class="absolute right-1 top-1 flex-center bg-blue-600 text-white w-4 h-4 rounded-full">0</span>
                </a>
              <a href="#" class="flex-center text-sabzlearnGreen hover:bg-sabzlearnGreen hover:text-white border-2 border-sabzlearnGreen rounded-md px-3 py-1 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>                      
                ورود / ثبت نام
              </a>
            </div>
        </div>
    </section>
</header>
<!-- mobile menu -->
<header class="block md:hidden">
    <section class="bg-gray-100">
        <div class="container">
            <div class="flex-between py-3">
               <!-- drawer init and show -->
                <div id="MobileNavToggler">
                    <button class="text-sabzlearnGreen border border-sabzlearnGreen focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                          </svg> 
                        </button>
                                         
                </div>
                <!-- logo -->
                <div>
                    <img src="./assets/images/logo/Logo.png" alt="logo" class="object-cover" />
                </div>
                <!-- profile icon -->
                <div>
                    <p class="flex-center bg-slate-200 rounded-full w-10 h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>                           
                    </p>
                </div>
            </div>

        </div>
    </section>
    <!-- mobile nav -->
<!-- drawer component -->
<div id="drawer-navigation" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-all translate-x-full duration-500 shadow-6 bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
<button id="CloseDrawer" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
</button>
<div class="py-4 overflow-y-auto">
<div class="flex-center my-3">
    <img src="./assets/images/logo/Logo.png" alt="logo" class="object-cover" />
</div>
<p class="line"></p>
  <ul class="space-y-5 font-medium">
    <li><a href="" class="flex items-center gap-2">
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
<li>
  </ul>
</div>
</div>

</header>
`;
function MobileNavToggler(){
    console.log("dsd");
}
class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
   
    const MobileNavToggler = this.shadowRoot.querySelector('#MobileNavToggler')
    const DrawerNavigation = this.shadowRoot.querySelector('#drawer-navigation')
    const CloseDrawer = this.shadowRoot.querySelector('#CloseDrawer')
    const frontEnd = this.shadowRoot.querySelector('#frontEnd')
    const frontEndSubmenu = this.shadowRoot.querySelector('#frontEndSubmenu')
    const Security = this.shadowRoot.querySelector('#Security')
    const SecuritySubmenu = this.shadowRoot.querySelector('#SecuritySubmenu')
    const Blogs = this.shadowRoot.querySelector('#Blogs')
    const BlogsSubmenu = this.shadowRoot.querySelector('#BlogsSubmenu')
    const Python = this.shadowRoot.querySelector('#Python')
    const PythonSubmenu = this.shadowRoot.querySelector('#PythonSubmenu')
    
    MobileNavToggler.addEventListener('click' , () => {
      DrawerNavigation.classList.toggle('right-64')
    })
    CloseDrawer.addEventListener('click' , () => {
      DrawerNavigation.classList.remove('right-64')
    })
    frontEnd.addEventListener('click' , () => {
      frontEndSubmenu.classList.toggle('hidden')
     SecuritySubmenu.classList.add('hidden')
     BlogsSubmenu.classList.add('hidden')
     PythonSubmenu.classList.add('hidden')
    })
    Security.addEventListener('click' , () => {
      SecuritySubmenu.classList.toggle('hidden')
      frontEndSubmenu.classList.add('hidden')
     BlogsSubmenu.classList.add('hidden')
     PythonSubmenu.classList.add('hidden')
    })
    Blogs.addEventListener('click' , () => {
      BlogsSubmenu.classList.toggle('hidden')
      frontEndSubmenu.classList.add('hidden')
     SecuritySubmenu.classList.add('hidden')
     PythonSubmenu.classList.add('hidden')
    })
    Python.addEventListener('click' , () => {
      PythonSubmenu.classList.toggle('hidden')
      frontEndSubmenu.classList.add('hidden')
     SecuritySubmenu.classList.add('hidden')
     BlogsSubmenu.classList.add('hidden')
    })
  }

  static observedAttributes() {

  }
}

export { Header };