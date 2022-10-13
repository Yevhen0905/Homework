// // let products = [
// //     {
// //         name: 'milk',
// //         price: 12,
// //         count: 2,
// //         total: 24,
// //         showTotalPrice: function() {
// //             return this.total
// //         }
// //     },
// //     {
// //         name: 'kefir',
// //         price: 12,
// //         count: 2,
// //         total: 24,
// //         showTotalPrice: function() {
// //             return this.total
// //         }
// //     },
// //     {
// //         name: 'kolbasa',
// //         price: 30,
// //         count: 1,
// //         total: 30,
// //         showTotalPrice: function() {
// //             return this.total
// //         }
// //     },
// //     {
// //         name: 'potato',
// //         price: 5,
// //         count: 200,
// //         total: 1000,
// //         showTotalPrice: function() {
// //             return this.total
// //         }
// //     }
// // ]

// class Product {                //класи є одиницями, сутнісями данни
//     constructor(productName, productPrice, productCount, productTotal) {
//         this.name = productName;
//         this.price = productPrice;
//         this.count = productCount;
//         this.total = productTotal;
//     }
//     showTotalPrice() {
//         console.log(this.total);
//     };

// }

// // const milkProduct = new Product('milk', 12, 2, 24);                                 //створюємо новий продукт
// // const kefirProduct = new Product('kefir', 8, 1, 8);                                 //створюємо новий продукт
// // const kolbasaProduct = new Product('kolbasa', 20, 2, 40);                                 //створюємо новий продукт
// // const potatoProduct = new Product('potato', 5, 200, 1000);                                 //створюємо новий продукт

// class milkProduct extends Product {
//     constructor(productName, productPrice, productCount, productTotal) {
//         super(productName, productPrice, productCount, productTotal)                 // product стаю суперкласом, класом вищого порядку. все що тут 
//                                                                                //кажемо прокинь в батківський Product а там є всі ключі
//         this.type = 'milk product';
//         this.fatProcent = '3%';
//      }
//     // showSlogan() {
//     //     console.log('молоко містить білки і вуглуводи');                    // уникальне значення
//     // }
//     get FatProcent() {
//         return this._fatProcent
//     }
//     /**
//      * @param {string} newfatProcent                       //параметри передати для set
//      */
//     set FatProcent(newfatProcent) {
//         this._fatProcent = newfatProcent;
//     }
// }

// const molokiaMilk = new milkProduct('molokia', 15, 3, 45)


// molokiaMilk.fatProcent = '5%';
// console.log(molokiaMilk.fatProcent);                          //викликаємо без дужок



////////////////////////////////////////////////////////////////////
// class Figure {
//     constructor(width, height, color, top, left) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//         this.top = top;
//         this.left = left;       
//     }
//     draw() {
//         const el = document.getElementById('box');
//         el.insertAdjacentHTML('beforeend', `
//         <div class="figure" style="width: ${this.width}; height: ${this.height}; background-color: ${this.color}; position:absolute; top: ${this.top}; left: ${this.left};"></div>
//         `)
//     }
// }

// class Square extends Figure {
//     constructor(width, color, top, left) {
//     super(width, width, color, top, left)
//     }
// }

// class Circle extends Square {
//     constructor(width, color, top, left) {
//         super(width, color, top, left)
//         }
//         draw() {
//             const el = document.getElementById('box');
//             el.insertAdjacentHTML('beforeend', `
//             <div class="figure" style="border-radius: 50%; width: ${this.width}; height: ${this.height}; background-color: ${this.color}; position:absolute; top: ${this.top}; left: ${this.left};"></div>
//             `)
//         }
// }

// const rectangle = new Figure('300px', '150px', 'pink', '50px', '300px');

// rectangle.draw();

// const square = new Square('200px', 'red', '50px', '600px');

// square.draw();

// const circle = new Circle('200px', 'black', '50px', '1000px');

// circle.draw();