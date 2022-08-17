const addBtn = document.querySelector('.add-book')
const shelves = document.querySelector('.books')
const clearBtn = document.querySelector('.clear')
const modal = document.querySelector('.modal')
const modalAdd = document.querySelector('.modal-add')
const bookForm = document.querySelector('.book-form')
const modalCancel = document.querySelector('.cancel')
const removeBtn = document.querySelector('.remove')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

addBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

clearBtn.addEventListener('click', () => {
    while (shelves.firstChild)    {
        shelves.removeChild(shelves.firstChild)
    }          
})

modalAdd.addEventListener('click', () => {
    let elements = bookForm.elements
    console.log(elements, elements[3].value)
    if (elements[0].value == '' || elements[1].value == '' || elements[2].value == '') {
        alert("Please fill out all fields")
    }

    else {
        modal.style.display = 'none'
        
        const book = document.createElement('div')
        book.classList.add('book-card')

        shelves.appendChild(book)

        let newBook = new Book(elements[0].value, elements[1].value, elements[2].value, elements[3].checked)
        console.log(newBook)
        
        let title = document.createElement('div')
        title.textContent = newBook.title
        title.classList.add('book-card-title')
        if (newBook.title.length > 20) title.classList.add('book-card-font-small')

        let author = document.createElement('div')
        author.textContent = `By: ${newBook.author}`
        author.style.paddingTop = '1rem'

        let pages = document.createElement('div')
        pages.textContent = `Number of Pages: ${newBook.pages}`

        let cardBtnContainer = document.createElement('div')
        cardBtnContainer.classList.add('book-card-buttons')

        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(pages)
        book.appendChild(cardBtnContainer)

        let readBtn = document.createElement('button')
        readBtn.textContent = "Test"
        if (newBook.read) {
            readBtn.classList.add('read')
            readBtn.textContent = "Read"
        } else  {
            readBtn.classList.add('not-read')
            readBtn.textContent = "Not read"
        }
        readBtn.addEventListener('click', () => {
            if (readBtn.classList.contains('read'))  {
                readBtn.classList.remove('read')
                readBtn.classList.add('not-read')
                readBtn.textContent = "Not read"
            } else   {
                readBtn.classList.remove('not-read')
                readBtn.classList.add('read')
                readBtn.textContent = "Read"
            }
        })

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Remove Book"
        deleteBtn.addEventListener('click', () => {
            shelves.removeChild(book)
        })
        
        
        cardBtnContainer.appendChild(readBtn)
        cardBtnContainer.appendChild(deleteBtn)


        let inputs = document.querySelectorAll(".input-field");
        inputs.forEach((input) => (input.value = ""));
    }
})

modalCancel.addEventListener('click', () => {
    modal.style.display = 'none'
    let inputs = document.querySelectorAll(".input-field");
    inputs.forEach((input) => (input.value = ""));

})


