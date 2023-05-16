const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.getElementById("close-modal-button");
const submitBookButton = document.getElementById("submit-book-button")
const books = document.querySelectorAll(".book-card")
const booksContainer = document.querySelector(".books-container")

openModal.addEventListener("click", () => {
	modal.showModal();
});

closeModal.addEventListener("click", () => {
	modal.close();
});

// submitBookButton.addEventListener("click", () => {
// 	modal.close();
// })



let library = [];

function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
	library.push(new Book(title, author, pages, status));
}

addBookToLibrary("book1", "author1", "50", "read");
addBookToLibrary("book2", "author2", "100", "unread");
addBookToLibrary("book3", "author3", "200", "read");
addBookToLibrary("book4", "author4", "300", "unread");

// console.table(library);

for (let i = 0; i < library.length; i++) {
	const bookCard = document.createElement("div")
	bookCard.setAttribute("class", "book-card")
	bookCard.innerHTML = `
	<h3>${library[i].title}</h3>
	<p>Title: ${library[i].title}</P>
	<p>Pages: ${library[i].pages}</p>
	<p>Status: ${library[i].status}</p>
	<button>Remove book</button>`;
	booksContainer.appendChild(bookCard)
}




