const $ = document
const MainPageHeaderTitle = $.querySelector('.MainPageHeaderTitle')
const UsersCountDown = $.querySelector('.UsersCountDown')
const CoursesCountDown = $.querySelector('.CoursesCountDown')
const CoursesTimeCountDown = $.querySelector('.CoursesTimeCountDown')

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


function GenerateCounter(max ,ElementName, delay){
  let counter = 0;
  const CounterInterval = setInterval(() => {
    if(counter === max){
      clearInterval(CounterInterval)
    }
    ElementName.innerHTML = counter;
    counter++
  },delay);
}
GenerateCounter(4500 , UsersCountDown , 1)
GenerateCounter(40 , CoursesCountDown , 25)
GenerateCounter(3132, CoursesTimeCountDown , 1)