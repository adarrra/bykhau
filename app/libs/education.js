

const teachers = [{
        pic: 'isaenko.jpg',
        title: 'Виталий Исаенко',
    descr: 'Digital-маркетолог' ,
        link: '',
    },
    {
        pic: 'kuznecov.png',
        title: 'Сергей Кузнецов',
        descr: 'Бизнес-аналитик',
        link: '',
    },
    {
        pic: 'krek.webp',
        title: 'Александр Крек',
        descr: 'Директор по персоналу',
        link: '',
    },
    {
        pic: 'ravinsky.webp',
        title: 'Евгений Равинский',
        descr: 'Дизайнер',
        link: '',
    },
    {
        pic: 'prohorenko.webp',
        title: 'Дмитрий Прохоренко',
        descr: 'Разработчик сайтов',
        link: '',
    }
];


const card2 = [{
        pic: 'meeting.png',
        title: 'Бизнес-анализ',
        descr: 'Бизнес-аналитик - это Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'business_analysis.html',
        stl: 0
    },
    {
        pic: 'office.png',
        title: 'Управление проектами ',
        descr: 'Менеджер проекта - это Специалист, отвечающий за успешное выполнение проекта: в указанные заказчиком сроки, с необходимым качеством, при фиксированном бюджете, ограниченных человеческих ресурсах и в соответствии с требованиями со стороны заказчика.',
        link: 'project_management.html',
        stl: 0
    },
    {
        pic: 'inc3.png',
        title: 'У вас есть интересный курс?',
        descr: 'Возможно, вы хотите стать лектором и у вас есть интересный курс  - мы с радостью вас выслушаем и, возможно, что-то придумаем вместе!',
        link: 'link3.html',
        stl: 1,
        c2a: true
    }
];


const card4 = [{
        pic: 'code.png',
        title: 'Основы Web',
        descr: 'Web-разработчик  - это специалист, создающий сайты и приложения для Web (например, системы интернет-банкинга, службы заказов билетов, и многое другое). Может отвечать как только за серверную или браузерную часть сайта, так и за обе эти составляющих.',
        link: 'web_app.html',
    },
    {
        pic: 'laptop.png',
        title: 'Front-End',
        descr: 'Frontend-разработчик - это это специалист, который превращает созданный дизайнером макет в статическую веб-страницу или динамическое веб-приложение. Получая дизайн-макет сайта от дизайнера, front-end-разработчик выполняет его адаптивную и отзывчивую верстку для различных устройств с помощью HTML, CSS и программирует взаимодействие частей сайта с помощью JavaScript.',
        link: 'front-end.html',
    },
    {
        pic: 'people.png',
        title: 'Язык программирования Java',
        descr: 'Java-разработчик - это специалист, который создает комплексные приложения, используя одноименный язык программирования. Java широко используется на сайтах электронной коммерции, в различных корпоративных информационных системах. Java является ведущим языком разработки приложений под ОС Android и используется во встраиваемых системах.',
        link: 'coding_java.html',
    },
];


const card5 = [{
        pic: 'screen.png',
        title: 'Язык программирования PHP',
        descr: 'PHP-разработчик - это специалист, который занимается разработкой сайтов на языке программирования, созданном специально для этой цели.В обязанности PHP-разработчика входит написание программного кода, создание и доработка дополнительных модулей, отладка и исправление ошибок в коде скриптов. От качества работы PHP-разработчика зависит скорость, надежность, функционирование и успешное развитие веб-сайта в целом.',
        link: 'coding_php.html',
    },
    {
        pic: 'keyboard.png',
        title: 'Тестирование программного обеспечения',
        descr: 'Кто такой тестировщик ПО? Специалист, который занимается обеспечением высокого качества IT-проектов (сайтов, мобильных приложений и пр.), поиском ошибок и сбоев в их работе. Тестировщик моделирует различные ситуации, которые могут возникнуть в процессе использования предмета тестирования, чтобы разработчики смогли исправить обнаруженные ошибки.',
        link: 'software_testing.html',
    },

    {
        pic: 'code.png',
        title: 'Основы Web-дизайна',
        descr: 'Курс рассчитан на новичков в дизайне, а также людей, которые имеют выборочные знания в области проектирования интерфейсов.',
        link: 'web_design.html',
    },


];

const card6 = [{
        pic: 'analyticscr.png',
        title: 'Гид по IT-профессиям',
        descr: 'Данный курс подойдет всем, кто: Хочет в IT, но не знает с чего начать. Желает развиваться в IT, но сомневается между несколькими направлениями. Является родителем и хочет помочь своему ребенку определиться с будущей профессией в IT.',
        link: 'guide_to_it.html',
    },
    {
        pic: 'analytic.png',
        title: '"Удаленная работа или как зарабатывать, не выходя из дома"',
        descr: 'Развитие IT-технологий определяет профессии будущего, поэтому даже в кризис специалисты на удаленной работе не сидят без дела. И сейчас самое время научиться использовать современные технологии и начать на этом зарабатывать.',
        link: 'employment_opportunity.html',
    },

];


const card8 = [{
        pic: 'analyticscr.png',
        title: 'Полный практический курс интернет-маркетинга',
        descr: 'Кто такой интернет-маркетолог? Специалист, который продвигает товар (услугу) в интернете, формирует и повышает положительную репутацию компании в целях увеличения объема продаж.',
        link: 'Internet_marketing.html',
        stl: 0
    },
    {
        pic: 'keyboard.png',
        title: 'IT-Бухгалтер',
        descr: 'Курс для тех, кто хочет, не меняя профессию бухгалтера, работать в сфере IT.',
        link: 'it_accountant.html',
        stl: 0
    },


    {
        pic: 'comput.png',
        title: 'Уже все знаете? Поработаем?',
        descr: 'Для тех, кто уже все знает у нас есть отличный и бесплатный коворкинг. Быхов. Ул. Краснознаменная, 65',
        link: 'link2.html',
        stl: 1,
        c2a: true
    },
];

const courseCardRows = [
    { cards: card2, id: 'car2' },
    { cards: card4, id: 'car4' },
    { cards: card5, id: 'car5' },
    { cards: card6, id: 'car6' },
    { cards: card8, id: 'car8' },
]


// =========================== //========================//


fillCardRows(); 


function fillCardRows() {
    car1.innerHTML = teachers.reduce((acc, teacher) => {
        return acc + ` <div class="teacher">
    <img class="teacher_img" src="../img/page_edu/${teacher.pic}" alt="">
    <h3>${teacher.title}</h3>
        <div class="teacher_desc">
        <span>${teacher.descr}</span>
        </div>
    </div>  `
    }, ``);

    courseCardRows.forEach(row => {
        let html = row.cards.reduce((acc, card) => card.c2a ? acc + fillC2aCardTmplt(card) : acc + fillCardTmplt(card), ``);
        document.getElementById(row.id).innerHTML = html;
    })
}


function fillCardTmplt(data) {
    return ` 
        <div>
        <a class="img-cont" href="${data.link}">
            <img class="card_img" src="../img/${data.pic}" alt="">
            <h3 class="card_title">${data.title}</h3>
        </a>
        <div class="hc1">
        <span><a href="${data.link}">${data.descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${data.link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;
}

function fillC2aCardTmplt(data) {
    return `<div  onclick="forma()" class="c2a">
        <img class="card_img" src="../img/${data.pic}" alt="">
        <h3 class="card_title">${data.title}</h3>
        <div class="hc1" style="text-align: center">
        <span>${data.descr}</span>
        </div>
        <div class="card_arrow"><img src="../img/arrow10.svg" alt=""></div>    
    </div> `
}