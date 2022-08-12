const addBtn = document.querySelector('.add-book')
const shelves = document.querySelector('.books')
const clearBtn = document.querySelector('.clear')

addBtn.addEventListener('click', () => {
    const book = document.createElement('div')
    book.classList.add('book-card')

    shelves.appendChild(book)
})

clearBtn.addEventListener('click', () => {
    while (shelves.firstChild)    {
        shelves.removeChild(shelves.firstChild)
    }          
})