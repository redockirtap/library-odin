const booksArray = [];
const addBookButton = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const submitButton = document.querySelector('.submit-btn');
let counter = 0;

function Book(name, author, isRead) {
    this.name = name
    this.author = author
    this.isRead = isRead
    // this.info = function () {
    //     return `${name}, ${author}, ${isRead}.`
    // }
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
    const deleteBtn = document.createElement('button');
    const cardInfo = document.createElement('div');
    const readBtn = document.createElement('button');
    const finishedBook = booksArray.at(-1).isRead;

    card.className = `cards card-${counter}`;
    deleteBtn.className = 'card-delete';
    cardInfo.className = "card-info";
    readBtn.className = finishedBook === 'read' ? 'read-book' : 'unread-book';

    deleteBtn.textContent = '🗑';
    cardInfo.innerText = `"${booksArray.at(-1).name}",
    ${booksArray.at(-1).author}`;
    readBtn.textContent = finishedBook === 'read' ? 'READ' : 'UNREAD';

    card.appendChild(deleteBtn);
    card.appendChild(cardInfo);
    card.appendChild(readBtn);
    wrapper.appendChild(card);

    deleteBtn.addEventListener('click', deleteCard);
    readBtn.addEventListener('click', changeReadStatus);
}

const deleteCard = function (e) {
    const theDeleteButton = e.target;
    const bookIndex = Number(theDeleteButton.parentElement.className.slice(-1));
    console.log(bookIndex);
    booksArray.forEach((item, index) => changeIndex(item, index, bookIndex));
    booksArray.splice(bookIndex, 1);
    counter -= 1;
    console.log(counter);
    console.log(booksArray);
    theDeleteButton.parentElement.remove();
}

const changeIndex = function (item, index, bookIndex) {
    const card = document.querySelector(`.cards.card-${index}`);
    if (index > bookIndex) {
        console.log(`I am card ${index}`);
        card.className = `cards card-${index-1}`;
    }
}

const changeReadStatus = function (e) {
    let readStatus = e.target.innerText;
    const bookIndex = Number(e.target.parentElement.className.slice(-1));
    if (readStatus === 'READ') {
        this.textContent = 'UNREAD';
        this.className = 'unread-book';
        booksArray[bookIndex].isRead = 'unread';
    } else {
        this.textContent = 'READ';
        this.className = 'read-book';
        booksArray[bookIndex].isRead = 'read';
    }
    console.log(booksArray[bookIndex].isRead);
}

const eventListeners = function () {
    addBookButton.addEventListener('click', openModal);
    window.addEventListener('click', closeModal);
    submitButton.addEventListener('click', addTheBook);
}

eventListeners()