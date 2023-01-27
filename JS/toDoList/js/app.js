const LI_CLASS = 'list-group-item d-flex align-items-center border-0 mb-2 rounded'; // з великої літери константа буду часто використовуватися і є статичною
const todoList = document.querySelector('#todo');

const todoArr = [
    {
        label: 'buy iphone',
        isDone: false
    },
    {
        label: 'feed dog',
        isDone: false
    }
];

// 1. Додавання об'єкта;
// 2. Очищення импута після додавання inputEl.value = '';
// 3. Коли нажимаємо на checkbox визначаемо item як зроблений
// 4. Зробити активним
// 5. Додаємо модалку
// 6. Додаємо статус
// 7. додали інформацію у модалку


// функція очистки масиву, перед тим як добавити новий об'єкт, так як добавить старі і потім новий
function cleanToDo() {
    todoList.innerHTML = '';
};

function toggleModal() {             // універсальна функція відкриття і закриття модалки
    const modalW = document.querySelector('.modal'); // знайшли модалку
    const isOpen = modalW.classList.contains('open'); //перевіряємо є класс 'open' чи ні 
  //  modalW.classList.remove('open'); // видаляємо клас длч закриття

    isOpen ? modalW.classList.remove('open') : modalW.classList.add('open');
} 

// другий варіант проще
// function closeModal() {             // функція закриття модалки
//     const modalW = document.querySelector('.modal'); // знайшли модалку
//     modalW.classList.remove('open'); // видаляємо клас длч закриття
// } 

function createIcon() {              // створюємо "а" для відкриття модального вікна і добавляємо до li
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('show-icon');

    a.addEventListener('click', e => {                // для відкривання модалки
        const targetItem = e.target.parentNode; // хочемо знайти li в середені якого іконка по якій клікаємо(шоб добавити підпис модального вікна)
                                         // e.target дасть нам  "а" по якому ми клікаємо .parentNode його батківський елемент
        const dataIndex = targetItem.dataset.index; // отримати доступ до елементу 'li' де інформація яку я буду відображати
                                                      //беру дата-атрибут батьківського li
        const title = document.querySelector('.modal-title'); // знаходимо html елемент де будемо писати текст
        title.textContent = todoArr[dataIndex].label; // добавляяємо в текст назву label потрібного елемента з масиву, беремо через dataIndex(0, 1...), який раніше прив'язали 
        
        const badge = document.querySelector('.badge'); // знаходимо клас статуса і підв'язуємо
        badge.textContent = todoArr[dataIndex].isDone ? 'Done' : 'To Do'; //буде змінюватися в залежності від статуса isDone

        if(todoArr[dataIndex].isDone) {                // зміна кольору в залежності від статусу
            badge.classList.remove('badge-alert');
            badge.classList.add('badge-success');
        } else {
            badge.classList.remove('badge-success');
            badge.classList.add('badge-alert');
        }
        
        toggleModal();  //додали функцію для відкриття-закриття
      
     // другий вариант  //  const modalW = document.querySelector('.modal'); // знаходимо модалку
        //  modalW.classList.add('open');        // добавляємо класс для відкриття
    })

    return a;
}

function createLi(item, index) {
    const li = document.createElement('li'); //створюємо li
    const checkbox = createCheckbox(); //запускаємо функцію створений инпут в li
    const icon = createIcon();  // запускаємо функцію створений 'a' в li

    
    li.setAttribute('class', LI_CLASS); // додаємо клас
    li.setAttribute('data-index', index); // дата атрибут 
    li.textContent = item.label; // кладево  в li наш label
    li.prepend(checkbox); // додаємо  инпут в li
    li.append(icon); //  додаємо  'a' в li


    return li; // повернення 
};

function createCheckbox() {                                // створюємо инпут
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'form-check-input me-2');
    // шукаємо необхідний елемент із масиву і змінювати
    checkbox.addEventListener('change', e => {    //буква 'e' сам об'єкт подій, містить дом елемент де ця подія проходить
        const targetCheckbox = e.target;  
        const isChecked = targetCheckbox.checked;
        const parentLi = targetCheckbox.parentNode;   //parentNode взяти батьківський елемент
        parentLi.classList.toggle('active');

        
        const dataIndex = parentLi.dataset.index; // dataset для дата - атрибутів
        //const dataIndex = parentLi.getAttribute('data-index'); другий варіант знаходимо атрибут батьківського
        todoArr[dataIndex].isDone = isChecked;
      
    } )   // .addEventListener ще один метод роботи з DOM елементами який дозволяє добавляти прослуховувачі подій 
                                   //   використовується коли нема доступу до HTML. Приймає 2 аргументи: подія і функція    

    return checkbox;
}

function createToDo() {   // функція створення li , проходмо по масиву

    todoArr.forEach((item, index) => {
        const li = createLi(item, index); //займе це місце 

        todoList.appendChild(li); //додаємо(запушуємо) створену li в ul 
    });
}
// щоб добавляти нові елемента створюємо функцію createTodoInput клас інпута. Має брати значення з поля вводу інпута

function addToDo() {
    const inputEl = document.getElementById('createTodoInput'); // знайшли на сторінці импут для ведення value
    const newToDoName = inputEl.value; // прочитали value // тепер добавляємо атрибут onclick (події), при нажимані на кнопку запусти функцію з js. при нажимані знаходить наш инпут і бере значення, яке буде новою назвою тудушки
    
    const newToDoObj = {                        //так як массив складється з об'єкт, потрубно його сформувати, щоб він створювався
        label: newToDoName,
        isDone: false
    };
    //тепер створений об'єкт треба додати до існуючого масиву
    todoArr.push(newToDoObj);
    inputEl.value = '';  // очишення инпута після пуша, щоб було чисте вікно

    cleanToDo(); //чистимо перед запуском добавлення
    createToDo();  //ще раз запускаємо щоб добавлялось в туду
} 

createToDo();