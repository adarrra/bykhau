


let card2 = [
    {
        pic: 'page_events/e1.png',
        title: 'Лекция “Айти в городе”', 
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link1.html',
        stl: 0
    },
    {
        pic: 'page_events/e2.png',
        title: 'Семинар “Войти в айти”',
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link2.html',
        stl: 0
    },
    {
        pic: 'inc3.png',
        title: 'Отдохнули? Поработаем?',
        descr: 'Возможно, вы хотите стать лектором и у вас есть интересный курс  - мы с радостью вас выслушаем и, возможно, что-то придумаем вместе!',
        link: 'link3.html',
        stl: 1
    }
];

let sc2='';
for (c2=0; c2<card2.length; c2++) {
    if (card2[c2].stl == 0) {  
    sc2 += ` <div><img class="card_img" src="../img/${card2[c2].pic}" alt="">
    <h3 class="card_title">${card2[c2].title}</h3>
        <div class="hc1">
        <span>${card2[c2].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card2[c2].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;
}  else {
    sc2 += `  <div onclick="forma()" style="cursor: pointer; box-shadow: none; border: 0"><img class="card_img" src="../img/${card2[c2].pic}" alt="">
    <h3 class="card_title" style="color: #3725E4; text-shadow: none; text-align: center">${card2[c2].title}</h3>
        <div class="hc1" style="text-align: center">
        <span>${card2[c2].descr}</span>
        </div>
        <div class="card_arrow"><img src="../img/arrow10.svg" alt=""></div>    
    </div> `;
}

}

//  console.log(s1);
car2.innerHTML = sc2;



let card4 = [
    {
        pic: 'page_events/e3.png',
        title: 'Пятничное чаепитие для избранных', 
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link1.html',
    },
    {
        pic: 'page_events/e4.png',
        title: 'Совместные песни и пляски быховчан',
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link1.html',
    },
    {
        pic: 'page_events/e5.png',
        title: 'Правила дистанционного обучения. Лекция', 
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link1.html',
    },
];

let sc4='';
for (c4=0; c4<card4.length; c4++) {
   
    sc4 += ` <div><img class="card_img" src="../img/${card4[c4].pic}" alt="">
    <h3 class="card_title">${card4[c4].title}</h3>
        <div class="hc1">
        <span><a href="${card4[c4].link}">${card4[c4].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card4[c4].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car4.innerHTML = sc4;


