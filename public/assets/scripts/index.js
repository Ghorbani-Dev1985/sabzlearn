import {GlobalSearchInApp} from './Funcs/Sheared.js';
import {BaseUrl} from  "./Funcs/Utils.js";
const $ = document
const MainPageHeaderTitle = $.querySelector('.MainPageHeaderTitle')
const UsersCountDown = $.querySelector('.UsersCountDown')
const CoursesCountDown = $.querySelector('.CoursesCountDown')
const CoursesTimeCountDown = $.querySelector('.CoursesTimeCountDown')
const GlobalSearchInput = $.querySelector('#GlobalSearchInput');
const GlobalSearchBtn = $.querySelector('#GlobalSearchBtn');




window.addEventListener('load' , () => {
  GetAndShowIndexPageInfos()
    GlobalSearchBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        location.href = `search.html?value=${GlobalSearchInput.value.trim()}`;
       
    })
})


let HeaderTitleText = 'ما به هر قیمتی دوره آموزشی تولید نمی کنیم'.split("")
let i =0;

// Type Sentence Writer
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

// Counters
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


const GetAndShowIndexPageInfos = async () => {
  const res = await fetch('http://localhost:4000/v1/infos/index')
  const IndexInfos = await res.json();
  console.log(IndexInfos);
  GenerateCounter(IndexInfos.usersCount , UsersCountDown , 100)
  GenerateCounter(IndexInfos.coursesCount , CoursesCountDown , 100)
  GenerateCounter(IndexInfos.totalTime , CoursesTimeCountDown , 100)
}