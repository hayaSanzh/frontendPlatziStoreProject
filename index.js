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

let category = localStorage.getItem('selectedCategory');;
let data = [];

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
        if (savedCategory != 'null') {
            category = savedCategory;
            console.log(category);
        }
        for(let i = 0; i < 24; i++){
            if(data[i].category === category || category === 'Main')
                drawUI(
                    data[i].title,
                    data[i].price,
                    data[i].images,
                    i
                )
        }
        console.log(data);
    })
}
allData();
const drawUI = (title, price, image, index) => {
    const item = document.createElement('div');
    item.className = 'item col-md-4';
    item.setAttribute('id', `item-${index}`);
    item.innerHTML = `
        <img class='imgapi' src='${image}'>
        <h2 class='titleapi'>${title}</h2>
        <h3 class='priceapi'>$${price}</h3>
        <button class='addCart'>Add to cart</button>
    `;
    row.appendChild(item);
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
    allData()
});
shoesBtn.addEventListener('click', () => {
    category = 'Shoes';
    allData();
});
soundBtn.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
});

//2

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.height) {
            answer.style.height = "";
        } else {
            answer.style.height = answer.scrollHeight + "px";
        }
    });
});

//3

const openFormBtn = document.getElementById('openFormBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close-btn');

openFormBtn.addEventListener('click', () => {
    popupForm.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', (event) => {
    event.preventDefault();
    popupForm.style.display = 'none';
});

//4

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F1C40F', '#9B59B6'];
let currentIndex = 0;

document.getElementById('colorButton').addEventListener('click', function() {
    const container = document.getElementById('colorContainer');
    container.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});


//5

function updateDateTime() {
    const now = new Date();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    document.getElementById('dateTime').textContent = `${formattedDate}, ${formattedTime}`;
    console.log(5 + '5' - 5);
}

setInterval(updateDateTime, 1000);
updateDateTime();

