const booksArray = [];
const addBookButton = document.querySelector('.add-book');
const modal = document.querySelector('.modal');



function Book(name, pages, author, isRead) {
    this.name = name
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function () {
        return `${name}, ${pages}, ${author}, ${isRead}.`
    }
}

const openModal = function () {
    modal.style.display = "block";
}

const closeModal = function (e) {
    console.log(e.target.className);
    if (e.target.className === "modal" || e.target.className === "close")
    modal.style.display = "none";
}

const eventListeners = function () {
    addBookButton.addEventListener('click', openModal);
    window.addEventListener('click', closeModal);
}

eventListeners()