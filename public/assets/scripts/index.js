const $ = document
const MainPageHeaderTitle = $.querySelector('.MainPageHeaderTitle')

window.addEventListener('load' , () => {
    let HeaderTitleText = '  ما به هر قیمتی دوره آموزشی تولید نمی کنیم  '
    let TypeIndex = 0
    TypeWriter(HeaderTitleText , TypeIndex)
})

function TypeWriter (text , index){
    if(index < text.length){
    MainPageHeaderTitle.innerHTML += text[index]
    index++
    }
    setTimeout(() => {
       TypeWriter(text , index);
    },100);
}