const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<footer class="bg-white py-8 text-slate-500 mt-12 border-t-4 border-t-emerald-300 rounded-tr-3xl rounded-tl-3xl">
   <div class="container">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-10">
       <!-- about us -->
      <div>
        <h5 class="font-DanaBold text-base md:text-2xl text-zinc-700 mb-4">درباره ما</h5>
        <p class="sm:max-w-xs">
          سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
        </p>
      </div>
      <!-- quick access -->
      <div>
        <h5 class="font-DanaBold text-base md:text-2xl text-zinc-700 mb-4"> دسترسی سریع</h5>
        <ul class="space-y-4">
          <li><a href="./terms-conditions.html">قوانین و مقررات</a></li>
          <li><a href="./send-ticket.html"> ارسال تیکت</a></li>
          <li><a href="./"> همه دوره ها </a></li>
        </ul>
      </div>
      <!-- useful access -->
      <div>
        <h5 class="font-DanaBold text-base md:text-2xl text-zinc-700 mb-4">  لینک های مفید</h5>
        <ul class="space-y-4">
          <li><a href="./"> آموزش جاوااسکریپت </a></li>
          <li><a href="./">  آموزش پایتون</a></li>
          <li><a href="./">  آموزش HTML </a></li>
          <li><a href="./">  آموزش CSS </a></li>
        </ul>
      </div>
      <!-- Social media -->
      <div>
        <h5 class="font-DanaBold text-base md:text-2xl text-zinc-700 mb-4">    شبکه های اجتماعی</h5>
        <!-- instagram -->
        <div class="flex items-center gap-2 mb-4">
          <div class="flex-center p-2 rounded-full bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC]">
            <img src="./assets/images/svg/instagram.svg" class="w-5 h-5 object-cover" />
          </div>
          <a href="https://www.instagram.com/sabzlearn_" class="text-ltr text-hover font-DanaBold dir-ltr">@sabzlearn_</a>
        </div>
        <!-- telegram -->
        <div class="flex items-center gap-2">
          <div class="flex-center p-2 rounded-full bg-gradient-to-b from-blue-400 to-blue-600">
            <img src="./assets/images/svg/telegram.svg" class="w-5 h-5 object-cover" />
          </div>
          <a href="https://t.me/sabzlearn" class="text-ltr text-hover font-DanaBold dir-ltr">@sabzlearn</a>
        </div>
      </div>
    </div>
    <!-- line -->
<p class="w-full h-px bg-gray-200 my-2"></p>
  <div class="flex justify-center xs:justify-between flex-wrap gap-x-3 gap-y-2 py-6 text-base">
    <span>ساخته شده با ❤️ در Ghorbani-dev.ir.هیچ استفاده تجاری صورت نخواهد گرفت</span>
    <p class="dir-ltr text-center">Copyright © 2019-2023 Sabzlearn. All rights reserved.</p>
  </div>
   </div>
</footer>
`;
class Footer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
   
  }

  static observedAttributes() {

  }
}

export { Footer };
