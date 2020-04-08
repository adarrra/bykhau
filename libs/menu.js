
// Основное меню

let menu = [
    {
        title: 'Бесплатное обучение',
        descr: 'Пройди обучение по продвижению своего бизнеса в интернете',
        link: 'link1.html'
    },
    {
        title: 'Стартап лаборатория',
        descr: 'Получи консультацию у наших лучших юристов и бухгалтеров',
        link: 'link2.html'
    },
    {
        title: 'Коворкинг',
        descr: 'Приходи работать в наш  коворкинг. Это абсолютно бесплатно. ',
        link: 'link3.html'
    },
    {
        title: 'Консультации',
        descr: 'Добейся успеха, став частью нашей стартап-лаборатории!',
        link: 'link4.html'
    },
];

let s='';
for (i=0; i<menu.length; i++) {
    s += ` <div class="m">
        <h2>${menu[i].title}</h2>
        <div>${menu[i].descr}</div>
        <a href="${menu[i].link}"><img src="img/arrow10.svg" alt=""></a>
    </div> `;
}

// console.log(s);
mainMenu.innerHTML = s;




// Меню мероприятий

let menu1 = [
    {
        dat: '22.11.2019',
        title: 'ООН для Быхова',
        descr: 'Специальный проект ПРООН. Бесплатное обучение востребованным профессиям для жителей Быхова.',
        link: 'event1.html',
        current: true
    },
    {
        dat: '22.01.2020',
        title: 'Семинар "Рынок АйТи"',
        descr: 'Можно ли рабзвивать айти за границами крупных городов? Об этому посвящен новый сeминар In/By',
        link: 'event2.html',
        current: false
    },
    {
        dat: '24.04.2020',
        title: 'Конференция RAUX 2020',
        descr: '24 апреля 2020 года в Быхове пройдет большая конференция по дизайну RAUX 2020.',
        link: 'event3.html',
        current: false
    }
];

let s1='';
for (i1=0; i1<menu1.length; i1++) {
    if (menu1[i1].current) {  
    s1 += ` <div class="currentEvent e">
<div class="date">${menu1[i1].dat}</div>
<h2><a href="${menu1[i1].link}" class="eventOn">${menu1[i1].title}</a></h2>
<p><a href="${menu1[i1].link}" class="eventOn">${menu1[i1].descr}</a></p>  
</div> `;
}  else {
    s1 += ` <div class="e">
<div class="date">${menu1[i1].dat}</div>
<h2><a href="${menu1[i1].link}" class="eventOff">${menu1[i1].title}</a></h2>
<p><a href="${menu1[i1].link}" class="eventOff">${menu1[i1].descr}</a></p>  
</div> `;
}

}

//  console.log(s1);
eventMenu.innerHTML = s1;


// Меню футера

let menu2 = [
    {
        m: 'img/m1.svg',
        title: 'Бизнес-инкубатор',
        link: 'pages/incubator.html'
    },
    {
        m: 'img/m2.svg',
        title: 'Обучение',
        link: 'pages/menu2.html'
    },
    {
        m: 'img/m3.svg',
        title: 'Наши проекты',
        link: 'pages/menu3.html'
    },
    {
        m: 'img/m4.svg',
        title: 'Мероприятия',
        link: 'pages/menu4.html'
    },
    {
        m: 'img/m5.svg',
        title: 'Новости',
        link: 'pages/menu5.html'
    },
    {
        m: 'img/m6.svg',
        title: 'Контакты',
        link: 'pages/menu6.html'
    },

];

let s2='';
for (i2=0; i2<menu2.length; i2++) {
    s2 += ` <div id="f">
    <a href="${menu2[i2].link}"><img src="${menu2[i2].m}" alt=""></a>
    <h2><a href="${menu2[i2].link}">${menu2[i2].title}</a></h2>
</div>  `;
}

// console.log(s);
footer.innerHTML = s2;