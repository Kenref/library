const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.getElementById("close-modal-button");
const submitBookButton = document.getElementById("submit-book-button")
const booksContainer = document.querySelector(".books-container")
// const books = document.querySelectorAll(".book-card")

const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const readingStatus = document.querySelectorAll("input[name='status']")


openModal.addEventListener("click", () => {
	modal.showModal();
});

closeModal.addEventListener("click", () => {
	modal.close();
});

// submitBookButton.addEventListener("click", () => {
// 	modal.close();
// })

function getStatus(statuss) {
	for (let i = 0; i < statuss.length; i++) {
		if (statuss[i].checked) {
			return "Read";
		}
	}
	return "Unread";
}





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

addBookToLibrary("batman", "superman", "100", "unRead");
addBookToLibrary("Game of Thrones", "George RR Martin", "2000", "Read");
addBookToLibrary("Lord of the Rings", "JRR Tolkien", "200", "read");
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


submitBookButton.addEventListener("click", () => {
	library.push(new Book(title.value, author.value, pages.value, getStatus(readingStatus)))
	console.log(library)
})


















// To make it so that the modal will close if you click outside of it
// modal.addEventListener("click", e => {
// 	const dialogDimensions = modal.getBoundingClientRect()
// 	if (
// 		e.client < dialogDimensions.left ||
// 		e.client > dialogDimensions.right ||
// 		e.clientY < dialogDimensions.top ||
// 		e.clientY > dialogDimensions.bottom
// 	) {
// 		modal.close()
// 	}
// })
