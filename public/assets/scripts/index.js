const $ = document
const MainPageHeaderTitle = $.querySelector('.MainPageHeaderTitle')

let HeaderTitleText = 'ما به هر قیمتی دوره آموزشی تولید نمی کنیم'.split("")
let i =0;

function TypeWriter() {
    if (i < HeaderTitleText.length) {
        MainPageHeaderTitle.append(HeaderTitleText[i]);
      i++;
    } else {
        MainPageHeaderTitle.innerHTML = '';
      i = 0;
    }
    setTimeout(TypeWriter, 100);
}

TypeWriter();