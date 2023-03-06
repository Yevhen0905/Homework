// 1.Створити HTML-сторінку для відображення/редагування тексту. При відкритті 
// сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, 
// замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
// При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. 
// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

document.addEventListener('keydown', function (e) {

    if ((e.code === 'KeyS' || e.code === 'KeyE') && e.ctrlKey) {
        e.preventDefault();
        let el = document.querySelector('p').nextElementSibling; //nextElementSibling повертає наступний елемент на тому самому рівні дерева.
        if (e.code === 'KeyE' && el.nodeName === 'DIV') {
            let newEl = document.createElement('textarea');
            newEl.textContent = el.textContent;
            el.replaceWith(newEl); // перезаписує вузол
        } else if (e.code === 'KeyS' && el.nodeName === 'TEXTAREA') {
            let newEl = document.createElement('div');
            newEl.textContent = el.value; // Исправил
            el.replaceWith(newEl); // перезаписує текст
        }
    }
});




// 2.Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, 
// необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні 
// сортуватися як числа, а не як рядки.

let listData = [{
        number: 1,
        name: 'Ужгород',
        population: 112447,
    },
    {
        number: 2,
        name: 'Запоріжжя',
        population: 710100,
    },
    {
        number: 3,
        name: 'Київ',
        population: 2884000,
    },
    {
        number: 4,
        name: 'Львів',
        population: 721301,
    },
    {
        number: 5,
        name: 'Одеса',
        population: 993120,
    },
    {
        number: 6,
        name: 'Дніпро',
        population: 966400,
    },
    {
        number: 7,
        name: 'Харков',
        population: 1419000,
    },
    {
        number: 8,
        name: 'Миколаїв',
        population: 486267,
    },
    {
        number: 9,
        name: 'Бердянськ',
        population: 113354,
    }
];

let sortField = 'number';
let order = 'asc';

const table = document.querySelector('.table tbody');

const [...fields] = document.querySelectorAll('.table th');
// console.log(fields);

function renderData() {
    listData.forEach(item => {
        const tr = document.createElement('tr');

        for (const key in item) {
            const td = document.createElement('td');
            td.textContent = item[key];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    });
}

function clearTable() {
    table.innerHTML = '';
};


function sortHelper(sortByField) {
    switch (sortByField) {
        case 'number':
        case 'population':
            return (a, b) => a[sortByField] > b[sortByField] ? 1 : -1;

        case 'name':
            return (a, b) => a[sortByField].toLowerCase() > b[sortByField].toLowerCase() ? 1 : -1;
    }
}

fields.forEach(item => {
    item.addEventListener('click', function (event) {
        // console.log(event.target);
        // console.log(item.dataset.sort);
        const field = item.dataset.sort;
        listData.sort(sortHelper(field));
        clearTable();
        renderData();
    });
});

renderData();


// 3.Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість 
// змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.



// запит елемента
const ele = document.getElementById('resizeMe');

// запит зміни розміру
const resizers = ele.querySelectorAll('.resizer');

// поточна позиція мишіe
let x = 0;
let y = 0;

// розмір елемента
let w = 0;
let h = 0;

// обробляти подію mousedown // що запускається, коли користувач перетягує інструмент зміни розміру
const mouseDownHandler = function (e) {
    // отримати поточне положення миші
    x = e.clientX;
    y = e.clientY;

    // розрахувати розміри елемента
    const styles = window.getComputedStyle(ele);
    w = parseInt(styles.width);
    h = parseInt(styles.height);

    // Приєднати слухачів до`document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // як далеко була переміщена миша
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // відрегулювання розміру елемента
    ele.style.width = `${w + dx}px`;
    ele.style.height = `${h + dy}px`;
};

const mouseUpHandler = function () {
    // видалення обробників `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

// прокрутити їх петлею
[].forEach.call(resizers, function (resizer) {
    resizer.addEventListener('mousedown', mouseDownHandler);
});