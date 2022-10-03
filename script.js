const booksArray = [];
const addBookButton = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const submitButton = document.querySelector('.submit-btn')
let counter = 1;

function Book(name, author, isRead) {
    this.name = name
    this.author = author
    this.isRead = isRead
    this.info = function () {
        return `${name}, ${author}, ${isRead}.`
    }
}

const openModal = function () {
    modal.style.display = "block";
}

const closeModal = function (e) {
    if (e.target.className === "modal"
     || e.target.className === "submit-btn"
     || e.target.className === "close")
    modal.style.display = "none";
}

const addTheBook = function () {
    const book = new Book();
    const form = document.querySelector('form')
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const finishedBook = document.querySelector('[name="finished"]:checked').value;
    book.name = title;
    book.author = author;
    book.isRead = finishedBook;
    booksArray.push(book);
    console.log(booksArray);
    form.reset();
    displayCard();
    counter += 1;
}

const displayCard = function () {
    const wrapper = document.querySelector('.wrapper');
    const card = document.createElement('div');
    const closeBtn = document.createElement('div');
    const cardInfo = document.createElement('div');
    card.className = `cards card-${counter}`;
    closeBtn.className = 'card-close';
    cardInfo.className = "card-info";
    closeBtn.textContent = '×';
    cardInfo.innerText = `Book ${counter} 
    "${booksArray.at(-1).name}",
    ${booksArray.at(-1).author},
    ${booksArray.at(-1).isRead}`;
    card.appendChild(closeBtn);
    card.appendChild(cardInfo);
    wrapper.appendChild(card);

}

const eventListeners = function () {
    addBookButton.addEventListener('click', openModal);
    window.addEventListener('click', closeModal);
    submitButton.addEventListener('click', addTheBook);
}

eventListeners()