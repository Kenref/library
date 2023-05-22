const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.getElementById("close-modal-button");
const submitBookButton = document.getElementById("submit-book-button")
let booksContainer = document.querySelector(".books-container")
const removeButtons = document.querySelectorAll(".remove-button")
// const books = document.querySelectorAll(".book-card")
const documentBody = document.querySelector("body")

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


//removing books
booksContainer.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove-button")) {
		const bookCard = e.target.parentNode;
		const index = Array.from(booksContainer.children).indexOf(bookCard)
		library.splice(index, 1)
		bookCard.remove()
	}
})

//toggle read
booksContainer.addEventListener("click", (e) => {
	if (e.target.classList.contains("toggle-read")) {
		let status = e.target.parentNode.children[3]
		if (status.innerHTML == "Status: Unread") {
			status.innerHTML = "Status: Read"
		}
		else {
			status.innerHTML = "Status: Unread"
		}
	}
})





function getStatus(statuss) {
	for (let i = 0; i < statuss.length; i++) {
		if (statuss[i].checked) {
			return "Read";
		}
		else {
			return "Unread"
		}
	}
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

addBookToLibrary("Harry Potter", "JK Rowling", "500", "Read");
addBookToLibrary("Game of Thrones", "George RR Martin", "2000", "Read");
addBookToLibrary("Lord of the Rings", "JRR Tolkien", "200", "Read");
addBookToLibrary("Skulduggery Pleasant", "Derek Landy", "300", "Unread");



function populatePage() {
	booksContainer.innerHTML = ""
	for (let i = 0; i < library.length; i++) {
	const bookCard = document.createElement("div");
	bookCard.setAttribute("class", "book-card");
		bookCard.innerHTML = 
	`<h3>${library[i].title}</h3>
	<p>Title: ${library[i].title}</P>
	<p>Pages: ${library[i].pages}</p>
	<p>Status: ${library[i].status}</p>
	<button class="toggle-read">Read</button>
	<button class="remove-button">Remove book</button>`;
	booksContainer.appendChild(bookCard);
	}
}

populatePage()


submitBookButton.addEventListener("click", () => {
	addBookToLibrary(title.value, author.value, pages.value, getStatus(readingStatus))
	populatePage()
})







// change it so that the button changes text to unread when clicked and remove the status line from cards










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
