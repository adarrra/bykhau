let card2 = [{
        pic: 'page_events/e1.png',
        title: '23-24 апреля Стартует 1 набор курса «Гид по IT-профессиям».',
        descr: 'На курсе Вы узнаете много нового о сфере IT, а также важный секрет - в IT есть не только программисты! Для обучения вам понадобится лишь компьютер с выходом в интернет и регистрация на курс.',
        link: 'guide_to_it.html',
        stl: 0
    },
    {
        pic: 'page_events/e2.png',
        title: '25-26 апреля Стартует 2 набор на курса «Гид по IT-профессиям»”',
        descr: 'Задумываетесь о светлом будущем, о том, как обеспечить себя, семью, детей? Ищете новую работу или хотите заняться чем-то более интересным? Вам к нам! На курсе вы узнаете общую информацию об IT-профессиях и какие из них наиболее перспективные. Детально ознакомитесь с основными профессиями и поймете, чем они отличаются, какая подошла бы именно Вам.',
        link: 'guide_to_it.html',
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

let sc2 = '';
for (c2 = 0; c2 < card2.length; c2++) {
    if (card2[c2].stl == 0) {
        sc2 += ` <div><a href="${card2[c2].link}"><img class="card_img" src="../img/${card2[c2].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card2[c2].link}">${card2[c2].title}</a></h3>
        <div class="hc1">
        <span><a href="${card2[c2].link}">${card2[c2].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card2[c2].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;
    } else {
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



let card4 = [{
        pic: 'page_events/e3.png',
        title: 'Пятничное чаепитие для избранных',
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link4.html',
    },
    {
        pic: 'page_events/e4.png',
        title: 'Совместные песни и пляски быховчан',
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link5.html',
    },
    {
        pic: 'page_events/e5.png',
        title: 'Правила дистанционного обучения. Лекция',
        descr: 'Прекрасные высокотехнологичные авто благодаря нашему стартапу появились в сентябере 2019 года над мирным небом Быхова',
        link: 'link6.html',
    },
];

let sc4 = '';
for (c4 = 0; c4 < card4.length; c4++) {

    sc4 += ` <div><a href="${card4[c4].link}"><img class="card_img" src="../img/${card4[c4].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card4[c4].link}">${card4[c4].title}</a></h3>
        <div class="hc1">
        <span><a href="${card4[c4].link}">${card4[c4].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card4[c4].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car4.innerHTML = sc4;