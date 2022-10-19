// 1.Створити HTML-сторінку для відображення/редагування тексту. При відкритті 
// сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, 
// замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
// При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. 
// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

document.addEventListener('keydown', function (e) {

    if ((e.code === 'KeyS' || e.code === 'KeyE') && e.ctrlKey) {
        e.preventDefault();
        let el = document.querySelector('p').nextElementSibling;  //nextElementSibling повертає наступний елемент на тому самому рівні дерева.
        if (e.code === 'KeyE' && el.nodeName === 'DIV') {
            let newEl = document.createElement('textarea');
            newEl.textContent = el.textContent;
            el.replaceWith(newEl); // перезаписує вузол
        }
        else if (e.code === 'KeyS' && el.nodeName === 'TEXTAREA') {
                let newEl = document.createElement('div');
                newEl.textContent = el.value; // Исправил
                el.replaceWith(newEl); // перезаписує текст
        }
    }
});




// 2.Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, 
// необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні 
// сортуватися як числа, а не як рядки.

const distanceToTheCity = [
    {
        city: 'Zaporizhzhia',
        distance: 780,
    },
    {
        city: 'Kiyv',
        distance: 350,
    },
    {
        city: 'Uzhhorod',
        distance: 460,
    },
    {
        city: 'Lviv',
        distance: 250,
    },
    {
        city: 'Odessa',
        distance: 550,
    },
]

const tableList = document.querySelector('.table')

function generetaTable() {
    distanceToTheCity.forEach(el => {
        const div = document.createElement('div');
        div.classList.add('row');

        const citySpan = document.createElement('span');
        const distanceSpan = document.createElement('span');

        citySpan.textContent = el.city;
        distanceSpan.textContent = el.distance;

        div.append(citySpan);
        div.append(distanceSpan);

        document.querySelector('.table').append(div);

    })
}

function clearTable() {
    table.innerHTML = '';
};
// функція сортування

function sortArr(sortСolumn) {
    let keyA = a[item];
    let keyB = b[item];

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
};
 

const sortHeader = document.querySelectorAll('.sortHeader');
sortHeader.forEach(el => {
     el.addEventListener('click', function(e) {
        const targetItem = e.target;
        //  console.log(targetItem.dataset.sort); //перевірка таргета для ключа
        const sortKey = targetItem.dataset.sort; // знайшли ключ для подальших маніпуляцій      
        distanceToTheCity.sort(sortArr(sortKey));
        clearTable(); 
        generetaTable();
    })
});

generetaTable();


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