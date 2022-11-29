// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    get radius() {
        return this._radius;
    }
    
    set radius(value) {
        this._radius = value;
    }
    // обчислення діаметра
    get diameter() {
        return this._radius * 2;
    }
    // обчислення площі
    area() {
        return(Math.PI * this._radius ** 2).toFixed(2);
    }
    //обчислення довжини кола
    length() {
        return(2 * Math.PI * this._radius).toFixed(2);
    }
}

const circle = new Circle('25');
console.log(circle.radius);

console.log('Діаметр = ' + circle.diameter);
console.log('Площа = '+ circle.area());
console.log('Довжина = '+ circle.length());


// Завдання 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; 
//текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай 
//метод для заправки.

// Продемонструй роботу написаних методів.
const str = 'frontend developer the best profession';
class Marker {
    constructor(color, inkPercent) {
        this.color = color;
        this.inkPercent = 39;
    }

    writeInk(str) {
        let strСonnect = str.replaceAll(' ', '');  // метод з'єднуємо всі знаки без пробілів
        if (strСonnect.length * 0.5 <= this.inkPercent) {
            return str;
        }
         else {
            const strArr = str.split();
            let extraLetters = (this.inkPercent - strArr.length) / .5;
            return str.splice(str.length, extraLetters).join()
        }
    }
}
 
console.log(str);

class newMarker extends Marker {
     constructor(color, inkPercent) {
        super(color, inkPercent);
     }

     refillingInk() {
       this.inkPercent = 100;
     } 
}



// class SetFull extends Marker {
//     constructor(color, inkPercent) {
//         super(color, inkPercent);
//     }
//     get getSetFull() {
//         return 100 - this.inkPercent
//     }
// }



// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. 
//Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().


class Employee {
    constructor(firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    }
}
  
const emp1 = new Employee('Vasilenko', 'Evgen', 'director');
const emp2 = new Employee('Skiba', ' Alex', 'manager');
const emp3 = new Employee('Kutova', 'Olia', 'cashier');

listEmployees = [emp1, emp2, emp3];

console.log(listEmployees);

class EmpTable {
    constructor(listEmployees) {
        this.listEmployees = listEmployees;
    }

    getHtml() {
        const table = document.createElement('table');  // cтворюю таблицю
        const thead = document.createElement('thead');   //  заголовок
        const tr = document.createElement('tr');    // рядок         
        for (const key in this.listEmployees[0]) {              // роздаються назви стовбцям
            tr.innerHTML = tr.innerHTML + `<th>${key}</th>`;
        } 
        thead.appendChild(tr);                                 // додаємо рдки в заголовок
        table.appendChild(thead);                              // тепер в табоицю


        const tbody = document.createElement('tbody');         // створення тіла таблиці
        this.listEmployees.forEach(el => {                             
            const tr = document.createElement('tr');            // створення рядків           
            for (const key in el) { 
                const td = document.createElement('td');         // заповнюємо комірки таблиці
                td.textContent = el[key];                      // забираємо текст 
                tr.appendChild(td);                              // додаємо до рядків
            }
            tbody.appendChild(tr);                               // додаємо до тіла таблиці
        });
        table.appendChild(tbody);                               // додаємо тіло до загальної таблиці
        document.body.appendChild(table);                        // додаємо таблицю до документу
    }
}

const tableEmployees = new EmpTable(listEmployees);               
tableEmployees.getHtml();