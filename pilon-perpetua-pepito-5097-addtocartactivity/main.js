let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Fluted Hem Dress',
        image: 'images1.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'Pleat Printed Dress',
        image: 'images2.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'Flowy Shirt Dress',
        image: 'images3.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'Double Layer Dress',
        image: 'images4.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'Hellow Dress ',
        image: 'images5.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'Wow Dress ',
        image: 'images6.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'Bitch Dress',
        image: 'images7.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'Showy Dress',
        image: 'images8.jpg',
        price: 120000
    }

];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>`;

                listCard.appendChild(newDiv);
        }
    })
    quantity.innerText = count;
}


function calculateTotalPrice() {
    let totalPrice = 0;

    listCards.forEach((value) => {
        if (value != null) {
            totalPrice += value.price;
        }
    });

    return totalPrice;
}

function updateTotalPrice() {
    const totalPrice = calculateTotalPrice();
    total.innerText = `Total: $${totalPrice.toLocaleString()}`;
}


initApp();
updateTotalPrice();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity += 1;
    }
    updateTotalAndReload();
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }
    updateTotalAndReload();
}

function updateTotalAndReload() {
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;
        }
    });

    quantity.innerText = count;
    total.innerText = totalPrice.toLocaleString();
    reloadCard();
}

