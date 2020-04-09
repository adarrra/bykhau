
// Меню карточек

let card1 = [
    {
        pic: 'te1.jpg',
        title: 'Владимир Минский',
        descr: 'Практикующий бизнес-аналитик одной из ведущих IT - компаний, сертифицированный Scrum - мастер, Product Owner и PM финтех-стартапа.Опыт в финансовом домене более 7 лет.',
        link: 'link1.html',
    },
    {
        pic: 'te2.jpg',
        title: 'Сергей Кузнецов',
        descr: 'Сертифицированный Scrum - мастер, Product Owner и PM. Оператор axshare 100 лвл. уничтожитель пив и примерный семьянин.',
        link: 'link2.html',
    },
    {
        pic: 'te3.jpg',
        title: 'Борис Мамоненко',
        descr: 'Идеолог кальяна и прочих дел. Главный знаток дорог, которые ведут в Пиплс, почетный магистр банного ордена, победитель роста бороды на скорость и многого чего еще!',
        link: 'link3.html',
    }
];

let sc1='';
for (c1=0; c1<card1.length; c1++) {
   
    sc1 += ` <div style="box-shadow: none; border: 0"><img class="card_img" src="../img/${card1[c1].pic}" alt="">
    <h3 class="card_title" style="text-shadow: none; color: #000; font-family: Georgia; 
    font-style: italic; font-weight: normal; font-size: 16px; position: relative; top: -50px">${card1[c1].title}</h3>
        <div class="hc1">
        <span>${card1[c1].descr}</span>
        </div>
    </div>  `;
}


car1.innerHTML = sc1;



let card2 = [
    {
        pic: 'biz1.jpg',
        title: 'Бизнес-анализ в сфере разработки ПО', 
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link1.html',
        stl: 0
    },
    {
        pic: 'biz2.jpg',
        title: 'Presale и Discovery фазы в бизнес-анализе',
        descr: 'Presale и Discovery фазы - это отправные точки разработки проекта. Именно грамотная работа бизнес-аналитика на этом этапе способствует заключению контракта и развитию отношений с потенциальным клиентом.',
        link: 'link2.html',
        stl: 0
    },
    {
        pic: 'inc3.png',
        title: 'У вас есть интересный курс?',
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
    sc2 += `  <div style="box-shadow: none; border: 0"><img class="card_img" src="../img/${card2[c2].pic}" alt="">
    <h3 class="card_title" style="color: #3725E4; text-shadow: none; text-align: center">${card2[c2].title}</h3>
        <div class="hc1" style="text-align: center">
        <span>${card2[c2].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card2[c2].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div> `;
}

}

//  console.log(s1);
car2.innerHTML = sc2;


let card3 = [
    {
        pic: 'mob1.jpg',
        title: 'Основы программирования на Android', 
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link1.html',
    },
    {
        pic: 'mob2.jpg',
        title: 'Основы программирования на Swift под iOS',
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link2.html',
    },
   
];

let sc3='';
for (c3=0; c3<card3.length; c3++) {
   
    sc3 += ` <div><img class="card_img" src="../img/${card3[c3].pic}" alt="">
    <h3 class="card_title">${card3[c3].title}</h3>
        <div class="hc1">
        <span>${card3[c3].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card3[c3].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car3.innerHTML = sc3;






let card4 = [
    {
        pic: 'dev1.jpg',
        title: 'Основы программирования на Android', 
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link1.html',
    },
    {
        pic: 'dev2.jpg',
        title: 'Основы программирования на Swift под iOS',
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link2.html',
    },
    {
        pic: 'dev3.jpg',
        title: 'Основы программирования на Android', 
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link1.html',
    },
];

let sc4='';
for (c4=0; c4<card4.length; c4++) {
   
    sc4 += ` <div><img class="card_img" src="../img/${card4[c4].pic}" alt="">
    <h3 class="card_title">${card4[c4].title}</h3>
        <div class="hc1">
        <span>${card4[c4].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card4[c4].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car4.innerHTML = sc4;


let card5 = [
    {
        pic: 'dev4.jpg',
        title: 'Основы программирования на Swift под iOS',
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link2.html',
    },
    {
        pic: 'dev5.jpg',
        title: 'Основы программирования на Android', 
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link1.html',
    },
    {
        pic: 'dev6.jpg',
        title: 'Основы программирования на Swift под iOS',
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link2.html',
    },
   
];

let sc5='';
for (c5=0; c5<card5.length; c5++) {
   
    sc5 += ` <div><img class="card_img" src="../img/${card5[c5].pic}" alt="">
    <h3 class="card_title">${card5[c5].title}</h3>
        <div class="hc1">
        <span>${card5[c5].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card5[c5].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car5.innerHTML = sc5;



let card6 = [
    {
        pic: 'mark1.png',
        title: 'Полный практический курс интернет-маркетинга', 
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link1.html',
    },
    {
        pic: 'mark2.png',
        title: 'Курс IT SALES',
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link2.html',
    },
   
];

let sc6='';
for (c6=0; c6<card6.length; c6++) {
   
    sc6 += ` <div><img class="card_img" src="../img/${card6[c6].pic}" alt="">
    <h3 class="card_title">${card6[c6].title}</h3>
        <div class="hc1">
        <span>${card6[c6].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card6[c6].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car6.innerHTML = sc6;




let card7 = [
    {
        pic: 'prot1.png',
        title: 'Защита информации и информационная безопасность', 
        descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'link1.html',
        stl: 0
    },
    {
        pic: 'comput.png',
        title: 'Не хотите учиться? Поработаем?',
        descr: 'Для тех, кто уже все знает у нас есть отличный и бесплатный коворкинг. Быхов. Ул. Краснознаменная, 65',
        link: 'link2.html',
        stl: 1
    },
];

let sc7='';
for (c7=0; c7<card7.length; c7++) {
    if (card7[c7].stl == 0) {  
    sc7 += ` <div><img class="card_img" src="../img/${card7[c7].pic}" alt="">
    <h3 class="card_title">${card7[c7].title}</h3>
        <div class="hc1">
        <span>${card7[c7].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card7[c7].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;
}  else {
    sc7 += `  <div style="box-shadow: none; border: 0"><img class="card_img" src="../img/${card7[c7].pic}" alt="">
    <h3 class="card_title" style="color: #3725E4; text-shadow: none; text-align: center">${card7[c7].title}</h3>
        <div class="hc1" style="text-align: center">
        <span>${card7[c7].descr}</span>
        </div>
        <div class="card_arrow"><a href="${card7[c7].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div> `;
}

}

//  console.log(s1);
car7.innerHTML = sc7;