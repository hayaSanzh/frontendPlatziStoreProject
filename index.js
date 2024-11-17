
const container = document.getElementById('items');
const moreBtn = document.getElementById('more');
const mainBtn = document.getElementById('main');
const clothesBtn = document.getElementById('clothes');
const electronicsBtn = document.getElementById('electronics');
const furnitureBtn = document.getElementById('furniture');
const shoesBtn = document.getElementById('shoes');
const logoutBtn = document.getElementById('logout')
const row = document.createElement('div');
const soundBtn = document.getElementById('playSound');
const sound = document.getElementById('sound');
const categoryButtons = document.querySelectorAll('.category-btn');

let category = localStorage.getItem('selectedCategory');
let dataGlobal = [];

const allData = () => {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
            container.innerHTML = '';
            row.className = 'row';
            row.innerHTML = ``;
            container.appendChild(row);
            localStorage.setItem('selectedCategory', category);
            const savedCategory = localStorage.getItem('selectedCategory');
            console.log(category, savedCategory);

            for (let i = 0; i < 24; i++) {
                dataGlobal[i] = data[i];
                if (data[i].category === category || category === 'Main')
                    drawUI(
                        data[i].title,
                        data[i].price,
                        data[i].images,
                        i
                    )
            }
        })
}
allData();
const drawUI = (title, price, image, index) => {
    const item = document.createElement('div');
    item.className = 'item col-md-4';
    item.setAttribute('id', `item-${index}`);
    item.innerHTML = `
        <img class='imgapi' src='${image}' id='img-${index}'>
        <h2 class='titleapi' id='title-${index}'>${title}</h2>
        <h3 class='priceapi' id='price-${index}'>$${price}</h3>
        <button class='addCart' id='${index}'>Add to cart</button>
    `;
    row.appendChild(item);
    profileUI();
    cartUI();
}



mainBtn.addEventListener('click', () => {
    category = 'Main';
    allData();
});
clothesBtn.addEventListener('click', () => {
    category = 'Clothes';
    allData();
});
electronicsBtn.addEventListener('click', () => {
    category = 'Electronics';
    allData();
});
furnitureBtn.addEventListener('click', () => {
    category = 'Furniture';
    allData();
});
shoesBtn.addEventListener('click', () => {
    category = 'Shoes';
    allData();
});

const cartUI = () => {
    const addCartBtn = document.querySelectorAll('.addCart');
    const cartList = document.getElementById('cart-items');
    addCartBtn[addCartBtn.length - 1].addEventListener('click', () => {
        const id = addCartBtn[addCartBtn.length - 1].id;
        const listItem = document.createElement('li');
        listItem.className = 'liCart';
        listItem.innerHTML = `
            <img class='imgCart' src='${dataGlobal[id].images}'>
            <p><strong>${dataGlobal[id].title}</strong></p>
            <p>${dataGlobal[id].price}</p>
        `;
        cartList.appendChild(listItem);
    })
}

const profileUI = () => {
    const email = localStorage.getItem('registeredEmail') || 'Not available';
    const password = localStorage.getItem('registeredPassword') || 'Not available';
    document.getElementById('profile-email').textContent = email;
    document.getElementById('profile-password').textContent = password;
}

document.getElementById('cart-btn').addEventListener('click', () => {
    profileUI();

    document.getElementById('profile-panel').classList.add('active');
});

document.getElementById('close-panel-btn').addEventListener('click', function () {
    document.getElementById('profile-panel').classList.remove('active');
});

console.log(dataGlobal);



/*
const container = document.getElementById('items');
const moreBtn = document.getElementById('more');
const mainBtn = document.getElementById('main');
const clothesBtn = document.getElementById('clothes');
const electronicsBtn = document.getElementById('electronics');
const furnitureBtn = document.getElementById('furniture');
const shoesBtn = document.getElementById('shoes');
const logoutBtn = document.getElementById('logout')
const row = document.createElement('div');
const soundBtn = document.getElementById('playSound');
const sound = document.getElementById('sound');
const categoryButtons = document.querySelectorAll('.category-btn');

let category = localStorage.getItem('selectedCategory');
let dataGlobal = [];

const allData = () => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            container.innerHTML = '';
            row.className = 'row';
            row.innerHTML = ``;
            container.appendChild(row);
            localStorage.setItem('selectedCategory', category);
            const savedCategory = localStorage.getItem('selectedCategory');
            console.log(category, savedCategory);

            for (let i = 0; i < data.length; i++) {
                dataGlobal[i] = data[i];
                if (data[i].category === category || category === 'Main')
                    drawUI(
                        data[i].title,
                        data[i].price,
                        data[i].image,
                        i
                    )
            }
        })
}
allData();
const drawUI = (title, price, image, index) => {
    const item = document.createElement('div');
    item.className = 'item col-md-4';
    item.setAttribute('id', `item-${index}`);
    item.innerHTML = `
        <img class='imgapi' src='${image}' id='img-${index}'>
        <h2 class='titleapi' id='title-${index}'>${title}</h2>
        <h3 class='priceapi' id='price-${index}'>$${price}</h3>
        <button class='addCart' id='${index}'>Add to cart</button>
    `;
    row.appendChild(item);
    profileUI();
    cartUI();
}



mainBtn.addEventListener('click', () => {
    category = 'Main';
    allData();
});
clothesBtn.addEventListener('click', () => {
    category = "men's clothing";
    allData();
});
electronicsBtn.addEventListener('click', () => {
    category = "women's clothing";
    allData();
});
furnitureBtn.addEventListener('click', () => {
    category = 'electronics';
    allData();
});
shoesBtn.addEventListener('click', () => {
    category = 'jewelery';
    allData();
});

const cartUI = () => {
    const addCartBtn = document.querySelectorAll('.addCart');
    const cartList = document.getElementById('cart-items');
    addCartBtn[addCartBtn.length - 1].addEventListener('click', () => {
        const id = addCartBtn[addCartBtn.length - 1].id;
        const listItem = document.createElement('li');
        listItem.className = 'liCart';
        listItem.innerHTML = `
            <img class='imgCart' src='${dataGlobal[id].image}'>
            <p><strong>${dataGlobal[id].title}</strong></p>
            <p>$${dataGlobal[id].price}</p>
        `;
        cartList.appendChild(listItem);
    })
}

const profileUI = () => {
    const email = localStorage.getItem('registeredEmail') || 'Not available';
    const password = localStorage.getItem('registeredPassword') || 'Not available';
    document.getElementById('profile-email').textContent = email;
    document.getElementById('profile-password').textContent = password;
}

document.getElementById('cart-btn').addEventListener('click', () => {
    profileUI();

    document.getElementById('profile-panel').classList.add('active');
});

document.getElementById('close-panel-btn').addEventListener('click', function () {
    document.getElementById('profile-panel').classList.remove('active');
});

console.log(dataGlobal)*/