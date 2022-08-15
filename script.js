const addBtn = document.querySelector('.add-book')
const shelves = document.querySelector('.books')
const clearBtn = document.querySelector('.clear')
const modal = document.querySelector('.modal')
const modalAdd = document.querySelector('.modal-add')
const bookForm = document.querySelector('.book-form')

addBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

clearBtn.addEventListener('click', () => {
    while (shelves.firstChild)    {
        shelves.removeChild(shelves.firstChild)
    }          
})

modalAdd.addEventListener('click', () => {
    let elements = bookForm.entries()
    
    console.log(elements)
    alert(elements[0].value)
})

// addBtn.addEventListener('click', () => {
//     const book = document.createElement('div')
//     book.classList.add('book-card')

//     shelves.appendChild(book)
// })
