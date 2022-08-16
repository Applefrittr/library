const addBtn = document.querySelector('.add-book')
const shelves = document.querySelector('.books')
const clearBtn = document.querySelector('.clear')
const modal = document.querySelector('.modal')
const modalAdd = document.querySelector('.modal-add')
const bookForm = document.querySelector('.book-form')
const modalCancel = document.querySelector('.cancel')

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
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
    console.log(elements)
    if (elements[0].value == '' || elements[1].value == '' || elements[2].value == '') {
        alert("Please fill out all fields")
    }

    else {
        modal.style.display = 'none'
        
        const book = document.createElement('div')
        book.classList.add('book-card')

        shelves.appendChild(book)

        let newBook = new Book(elements[0].value, elements[1].value, elements[2].value)

        console.log(newBook)
        let bookInfo = Object.values(newBook)
        
        let title = document.createElement('div')
        title.textContent = bookInfo[0]
        title.classList.add('book-card-title')

        let author = document.createElement('div')
        author.textContent = `By: ${bookInfo[1]}`
        author.style.paddingTop = '1rem'

        let pages = document.createElement('div')
        pages.textContent = `Number of Pages: ${bookInfo[2]}`

        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(pages)
        // bookInfo.forEach(element => {
        //     let info = document.createElement('div')
        //     info.textContent = element

        //     book.appendChild(info)
        // })

        let inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.value = ""));
        //alert(elements[0].value)
    }
})

modalCancel.addEventListener('click', () => {
    modal.style.display = 'none'
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));

})
// addBtn.addEventListener('click', () => {
//     const book = document.createElement('div')
//     book.classList.add('book-card')

//     shelves.appendChild(book)
// })
