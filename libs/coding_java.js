
//Программа Курса

let cour = [
    {
        lesson: 'Занятие 1', 
        title: 'Структура платформы Java: JDK, JRE, JVМ',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 2', 
        title: 'Типы данных: примитивные и ссылочные',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 3', 
        title: 'Переменные',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 4', 
        title: 'Операторы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 5', 
        title: 'Условные операторы выполнения',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 6', 
        title: 'Циклы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 7', 
        title: 'Массивы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 8', 
        title: 'Строки',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 9', 
        title: 'Классы и объекты',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 10', 
        title: 'Абстрактные классы и интерфейсы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 11', 
        title: 'Внутренние классы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 12', 
        title: 'Аннотации',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 13', 
        title: 'Дженерики',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 14', 
        title: 'Коллекции',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 15', 
        title: 'Исключения',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 16', 
        title: 'Работа с файлами',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 17', 
        title: 'XML',
        descr: `
        `,
    },
    {
        lesson: 'Потоки', 
        title: 'XML',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 19', 
        title: 'Новое в Java',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 20', 
        title: 'Работа с БД',
        descr: `
        `,
    },
];

let sc='';
for (i1=0; i1<cour.length; i1++) {
    
 sc += `<div>
 <span>${cour[i1].lesson}.</span>
        <span class="sec-2__title">${cour[i1].title}</span>
     </div>
 <div>
     <div class="sec-2__less-block">
         
    
      <div class="sec-2__content">
            <ol>
            ${cour[i1].descr}
            </ol>
        </div>
    </div>
 </div> ` ;


}

course.innerHTML = sc;


