
//Программа Курса

let cour = [
    {
        lesson: 'Занятие 1', 
        title: 'Разработка Web-приложений. Основы HTML5',
        descr: `
        <li>1. Архитектура Web-приложений. Проектирование интерфейса пользователя. Средства и методы разработки Web-приложений.</li>
        <li>2. Структура HTML-документа, понятие тега и атрибута, списки, изображения, гиперссылки, цвета.</li>
        <li>3. Работа с таблицами и формами HTML. Структура таблицы: заголовки, строки и ячейки. Элементы формы: текстовые поля, радио переключатели, чекбоксы, списки, области текста, кнопки, поля выбора файла, цвета, диапазона, даты и времени.</li>
        <li>4. Вставка и управление аудио и видеоматериалами HTML.</li>
        `,
    },
    {
        lesson: 'Занятие 2', 
        title: 'Профессиональные редакторы для разработки Web-сайтов. Основы CSS3',
        descr: `
        <li>1. Визуальный редактор Adobe Dreamweaver: глобальные настройки, рабочая область, инспектор файлов, настройка Web-сайта, свойства страницы, вставка элементов, подключение стилей CSS и сценариев JavaScript, импорт табличных данных. Использование шаблонов HTML + CSS.</li>
        <li>2. Способы подключения CSS. Синтаксис и элементы стилей. Виды селекторов: универсальный, тега, класса, идентификатора, потомка, дочерний, сестринский, атрибута, псевдокласса, псевдоэлемента, структурных псевдоклассов. Комбинация и группирование селекторов, переменные в CSS. Наследование и каскадирование селекторов.</li>
        `,
    },
    {
        lesson: 'Занятие 3', 
        title: 'Адаптивность и возможности CSS3',
        descr: `
        <li>1. Использование CSS-медиазапросов для разработки адаптивного дизайна.</li>
        <li>2. Анимация и трансформация в CSS. Библиотеки анимации, CSS-генераторы. Градиенты, рамки, тени, переходы, фильтры.</li>
        <li>3. Использование препроцессоров на примере LESS: установка препроцессора, переменные, функции и вычисления, преобразование кода препроцессора в код CSS. Использование постпроцессоров: работа с вендорными префиксами. Методологии CSS.</li>
        <li>4. CSS-фреймворки на примере Bootstrap.</li>
        `,
    },
    {
        lesson: 'Занятие 4', 
        title: 'Adobe Photoshop для создания макета Web-сайта',
        descr: `
        <li>1. Интерфейс и настройки Photoshop. Масштаб, информация об изображении. Инструменты и команды выделения.</li>
        <li>2. Цветовые модели. Пиксели, разрешения и размеры. Слои и маски: быстрые маски, канал-маски, корректирующие слои, редактор градиента. Сохранение файла для Web.</li>
        <li>3. Создание коллажа, работа с текстом. Ретушь: коррекция уровней, применение фильтров, восстановление утраченных фрагментов. Работа с вырезками. Создание GIF-анимации.</li>
        <li>4. Создание макета Web-сайта: работа с линейкой и направляющими, группирование слоев. Bootstrap сетка. Подготовка созданного макета к верстке: слои-изображения, смарт-объекты.</li>
        <li>5. Применение Adobe Illustrator для создания логотипов, стикеров и элементов flat-дизайна.</li>
        `,
    },
    {
        lesson: 'Занятие 6', 
        title: 'JavaScript. Объекты браузера. Конструкторы объектов. JavaScript-фреймворки',
        descr: `
        <li>1. Работа с объектами window, document, navigator, history и др.</li>
        <li>2. Коллекции объекта document.</li>
        <li>3. Управление формами, работа со строками.</li>
        <li>4. Функции-конструкторы.</li>
        <li>5. JavaScript-фреймворки на примере jQuery и Node.js.</li>
        `,
    },
    {
        lesson: 'Занятие 7', 
        title: 'Верстка Web-сайта',
        descr: `
        <li>1. Редактор кода Adobe Brackets: базовые настройки, рабочая область, работа с папками и файлами, Live Preview, быстрое редактирование, установка и работа с плагинами.</li>
        <li>2. Семантические элементы HTML5 для группирования контента и разметки содержимого. Блочные и строчные элементы. Блочная модель: контейнеры и обертки, отступы и границы, содержимое блока, тип контейнера элемента, область блочного элемента, позиционирование элементов, переполнение блочного элемента, наложение элементов. Плавающие элементы - CSS свойство float. CSS-спрайты. Использование reset.css и normalize.css.</li>
        <li>3. CSS Flexbox: свойства flex-контейнера и flex-элементов. Верстка адаптивного шаблона Web-сайта с помощью CSS Flexbox.</li>
        <li>4. CSS Grid: работа с разметкой в двухмерном пространстве. Верстка адаптивного шаблона Web-сайта с помощью CSS Grid.</li>
        `,
    },
    {
        lesson: 'Занятие 8', 
        title: 'CMS-система WordPress для создания Web-сайта',
        descr: `
        <li>1. Взаимодействие клиент-сервер. Передача данных. Протокол HTTP. Принципы работы с Web-сервером.</li>
        <li>2. Установка и настройка Open Server (Apache, PHP, MySQL, phpMyAdmin, FTP-клиент, Git, домены и алиасы, почта и др.). Создание локального Web-сервера.</li>
        <li>3. Обзор CMS-систем (Joomla, Битрикс, OpenCart). CMS-система WordPress: установка и настройка, работа с шаблонами и плагинами, понятие виджета, работа с внутренним кодом PHP, работа с контентом.</li>
        <li>4. Перенос сайта WordPress с локального компьютера на хостинг.</li>
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


