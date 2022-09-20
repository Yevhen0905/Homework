//Вивід console.log
function show(data) {
    console.log(data);
}

//MIN

//  Створи масив «Список покупок». Кожен елемент масиву є об'єктом,
//  який містить назву продукту, кількість і куплений він чи ні, ціну за
//  одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:


let listOfProducts = [
    {
        productName: 'potato',  
        quantity: 2,
        status: 'bought',
        price: 24.5,
        amount: 49, 
    },
    {
        productName: 'tomato', 
        quantity: 3,
        status: 'no bought',
        price: 54.5,
        amount: 163.5,
    },
    {
        productName: 'apple', 
        quantity: 3,
        status: 'bought',
        price: 12,
        amount: 36,
    },
    {
        productName: 'pear', 
        quantity: 1,
        status: 'no bought',
        price: 35,
        amount: 35,
    }
]

////////////////////////////////////////////////////////////////////////////////////
// 1.Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
//  що ще не придбані, а потім - ті, що вже придбали


function sortHelper(a, b) {
    if(a.status < b.status) return 1;
    if(a.status == b.status) return 0;
    if(a.status > b.status) return -1;
}

listOfProducts.sort(sortHelper);

show(listOfProducts);


                            // другий варіант
                                          
                            // function listOfProductsSort(arr) {
                            //     for(let i = 0; i < arr.length; i++) {
                            //         if(arr[i].status === 'no bought') {        //  спочатку не придбані
                            //             show(arr[i].productName);
                            //         }
                            //     }
                            //     for(let i = 0; i < arr.length; i++) {
                            //         if(arr[i].status === 'bought') {
                            //             show(arr[i].productName);
                            //         }
                            //     }
                            // }

                            // listOfProductsSort(listOfProducts);
///////////////////////////////////////////////////////////////////////////////////
// 2.Покупка продукту. 
//Функція приймає назву продукту і відзначає його як придбаний.

function changeStatus(productName) {
    for(let i = 0; i < listOfProducts.length; i++) {
        if(productName === listOfProducts[i].productName) {
            listOfProducts[i].status = 'bought';
        }
    }
}

changeStatus('tomato');


//NORMA
////////////////////////////////////////////////////////////////////////////////////
// 1.Видалення продукту зі списку (видалення повинно проводитися шляхом
//  створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

let copyListOfProducts = [...listOfProducts];

show(copyListOfProducts);

copyListOfProducts.splice(1, 1);     
show(copyListOfProducts);


// 2. Додавання покупки в список. Враховуй, що при додаванні покупки
//  з уже існуючим в списку продуктом, необхідно збільшувати кількість
//  в існуючій покупці, а не додавати нову. При цьому також повинна 
//  змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості 
//  товарів стало 2, то сума буде 24.

function addToListOfProducts(addProductName) {
   let findedItem = listOfProducts.findIndex(item => item.productName === addProductName.productName);
   // якщо не має продукту добавляємо
   if(findedItem == -1) {
        listOfProducts.push(addProductName);
   } // якщо є додаємо до існуючого
     else {
        listOfProducts[findedItem].quantity += 1;
        listOfProducts[findedItem].amount += listOfProducts[findedItem].price; 
   }
}

let addProductName = {
    productName: 'beer',
    quantity: 2,
    status: 'bought',
    price: 30,
    amount: 60,    
};

addToListOfProducts(addProductName);
show(listOfProducts);

// let addProductName = {
//     productName: 'pear',
//     quantity: 1,
//     status: 'no bought',
//     price: 35,
//     amount: 35,    
// };

// addToListOfProducts(addProductName);
// show(listOfProducts);

////////////////////////////////////////////////////////////////////////////

// 1.Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.


let res = listOfProducts.reduce((acc, item) => acc += item.quantity * item.price, 0);

show(res);

                    //другий варіант
                    // function summ(listOfProducts) { 
                    //     let res = 0;

                    //     listOfProducts.forEach(item => {
                    //         res += item.quantity * item.price;
                    //     });
                    //     return res;
                    // }

                    // show(summ(listOfProducts));

// 2.Підрахунок суми всіх (не) придбаних продуктів.

const sum = listOfProducts.reduce((acc, item) => acc += item.quantity, 0);

show(sum);

                    // другий варіант
                    // function summProduct(listOfProducts) {
                    //     let res = 0;
                        
                    //     listOfProducts.forEach(item => {
                    //         res += item.quantity;
                    //     });
                    //       return res;
                    // }
                        
                    // show(summProduct(listOfProducts));


// 3.Показання продуктів в залежності від суми,(від більшого до меншого / від
//  меншого до більшого, в залежності від параметра функції, який вона приймає)

function sortHelperDown(a, b,) {
    return a.amount - b.amount;                // від  меншого до більшого
}

function sortHelperUp(a, b,) {
    return b.amount - a.amount;               // від більшого до меншого
}

function showlistOfProducts(order, arr) {                                                  
    order === 'down' ? arr.sort(sortHelperDown) : arr.sort(sortHelperUp);    // умова 

    console.log(arr);
} 

showlistOfProducts('down', listOfProducts);
// showlistOfProducts('Up', listOfProducts);