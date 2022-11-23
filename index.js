
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Functionalities class
class Functionalities{
    static displayBooks(){
        const storedBooks = []
        const books =storedBooks;

        books.forEach((book) => Functionalities.addBookToList(book))
    }
    static addBookToList(book){
        let list = document.querySelector("#book-list")

        let row = document.createElement("tr")
        row.innerHTML = `
        <td class='table-title'>${book.title}</td>
        <td class='table-author'>${book.author}</td>
        <td class='table-isbn'>${book.isbn}</td>
        <td><a href="#" class="edit">Edit</a></td>
        <td><a href="#" class="delete">X</a></td>
        `
        list.appendChild(row)
    }


    static clearField(){
        document.querySelector("#title").value  = ''
        document.querySelector("#author").value = ''
        document.querySelector("#isbn").value  = ''       
    }

    static editBook(el){
        //Get items from the table
        let tableTitle = document.querySelector(".table-title").innerHTML
        let tableAuthor = document.querySelector(".table-author").innerHTML
        let tableisbn = document.querySelector(".table-isbn").innerHTML

        if (el.classList.contains('edit')) {
            document.querySelector("#title").value = tableTitle;
            document.querySelector("#author").value = tableAuthor;
            document.querySelector("#isbn").value = tableisbn;
        }
         el.parentElement.parentElement.remove()
    }
}

// Event listeners
document.addEventListener("FunctionalitiesContentLoaded", Functionalities.displayBooks())

//Add a book
document.querySelector("form").addEventListener('submit', (submit => {
    //Stop flashing by preventing default action
    submit.preventDefault()
    
    //Get inputs values
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value
    //Validation
    if (title === '' || author === '' || isbn === '') {
        alert("Please fill in all fields")
    } else {
        //Create new book
        const book = new Book(title,author,isbn)

        //Add book to list
        Functionalities.addBookToList(book)

        //Clear form
        Functionalities.clearField()
    }
}))

let allbooks = document.querySelectorAll(".delete")
let newbooks = [...allbooks]
newbooks.filter(item => {
    item.addEventListener('click', (item,i) => {
        let itemIndex = newbooks.indexOf(item)
        if (itemIndex !== -1) {
            newbooks.splice(itemIndex, 1);
        }
    })
})

//Editing a book
document.querySelector("#book-list").addEventListener("click", clicked => {
    Functionalities.editBook(clicked.target)
})





