const booksArray = [];
const addBookButton = document.querySelector('.add-book');


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
    console.log('I work')
}

const eventListeners = function () {
    addBookButton.addEventListener('click', openModal);
}

eventListeners()