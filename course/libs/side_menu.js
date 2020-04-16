// Боковое меню

let menu2 = [
    {
        m: 'img/m1.svg',
        title: 'Бизнес-инкубатор',
        link: 'incubator.html'
    },
    {
        m: 'img/m2.svg',
        title: 'Обучение',
        link: 'education.html'
    },
    {
        m: 'img/m3.svg',
        title: 'Наши проекты',
        link: 'projects.html'
    },
    {
        m: 'img/m4.svg',
        title: 'Мероприятия',
        link: 'events.html'
    },
    {
        m: 'img/m5.svg',
        title: 'Новости',
        link: 'news.html'
    },
    {
        m: 'img/m6.svg',
        title: 'Контакты',
        link: 'contacts.html'
    },

];

let s3='';
for (i3=0; i3<menu2.length; i3++) {
    s3 += ` <div class="box_menu">
    <a href="${menu2[i3].link}"><img src="../${menu2[i3].m}" alt=""></a> 
    <a href="${menu2[i3].link}"><h2>${menu2[i3].title}</h2></a>            
</div>  `;
}

// console.log(s);
side_menu.innerHTML = s3;