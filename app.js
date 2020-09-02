const books = [
    {title:"In Search of Lost Time ",author:"Marcel Proust",pages:499,isRead:""},
    {title:"The Great Gatsby",author:"F. Scott Fitzgerald",pages:199,isRead:""},
    {title:"Don Quixote",author:" Miguel de Cervantes",pages:399,isRead:""},
    {title:"Ulysses ",author:"James Joyce",pages:400,isRead:""}
];

class Book{
    constructor(title,author,pages,isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function addBook(book){
    const container = document.querySelector(".container");
    const div = document.createElement('div');

    div.classList.add('book');
    div.innerHTML = 
    `<span class="delete">X</span>
     <span>${book.title}</span>
     <span>By</span>
     <span>${book.author}</span>
     <button class='sbtn'>READ</button>`;
     container.appendChild(div);
}

function displayBooks (){
    books.filter(book => {
        addBook(book);
    });
}
//clear the form fields after submition
function clear(){
    document.querySelector('#title').value ='';
    document.querySelector('#author').value ='';
    document.querySelector('#pages').value ='';
    document.querySelector('#isRead').checked = false;
}

//function checkBox(){
//    const btn = document.getElementsByClassName("sbtn")
//    const Read = document.querySelector('#isRead');
//    if(Read.checked === false){
//        
//    }
//}
//checkBox()

 //function to toggle the book READ/NOT READ status
 function toggleButton(el){
    if(el.classList.contains('sbtn')){
        if(el.innerHTML == 'READ'){
            el.innerHTML = 'NOT READ';
            el.style.background = 'red';
        }else{
            el.innerHTML = 'READ';
            el.style.background = 'green';
        }
    }
}
//eventListener for the two book buttons 
const cont = document.querySelector('.container')
cont.addEventListener('click', function(e) {
toggleButton(e.target);
deleteBook(e.target);
});

//add event to display the book
document.addEventListener('DOMContentLoaded', displayBooks);
 //event to add a book
    document.querySelector('.form').addEventListener('submit', (e) =>{
        e.preventDefault();
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const isRead = document.querySelector('#isRead').checked;
        
        const newBook = new Book(title, author,pages,isRead);
        const index = books.findIndex(book => book.title == newBook.title); 
        if(index === -1){
            addBook(newBook);
            books.push(newBook);
        }else{
            alert('This Book is exists already');
        }

        const btns = Array.from(document.getElementsByClassName("sbtn"));
        const theLastButton = btns.slice(-1)[0];
        
        if(!isRead){
            theLastButton.innerHTML = 'NOT READ';
            theLastButton.style.background = 'red';
        }
        clear();
    });


    //function to remove a book from the list 
    function deleteBook(arg){
        if(arg.classList.contains('delete')){
            arg.parentElement.remove();
        }
    }

   
   
  