const books = [
    {title:"In Search of Lost Time ",author:"Marcel Proust",pages:499,isRead:"no"},
    {title:"The Great Gatsby",author:"F. Scott Fitzgerald",pages:199,isRead:"yes"},
    {title:"Don Quixote",author:" Miguel de Cervantes",pages:399,isRead:"no"},
    {title:"Ulysses ",author:"James Joyce",pages:400,isRead:"yes"}
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
     <button class='but'>READ</button>`;
     container.appendChild(div);
}

function displayBooks (){
    books.filter(book => {
        addBook(book);
    });
}

function clear(){
    document.querySelector('#title').value ='';
    document.querySelector('#author').value ='';
    document.querySelector('#pages').value ='';
}







//add event to display the book
document.addEventListener('DOMContentLoaded', displayBooks);
//event to add a book
    document.querySelector('.form').addEventListener('submit', (e) =>{
        e.preventDefault();
       
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const isRead = document.querySelectorAll('input[name="isRead"]')
       


        const newBook = new Book(title, author,pages,isRead);
        const index = books.findIndex(book => book.title == newBook.title);
        if(index === -1){
            addBook(newBook);
            books.push(newBook);
        }else{
            alert('This Book is exists already');
        }
        
       // newBook.isRead.forEach(radio =>{
       //         if(radio.value == 'no'){
       //             button.textContent = "Not Read"
       //             button.style.backgroundColor = 'red'
       //         }
       //     
       // });
        clear();
    });


  //  function toggleButton(el){
  //      if(el.classList.contains('button')){
  //          el.addEventListener('click',function() {
  //              el.classList.toggle('newClass');
  //              (el.innerHTML === 'READ')? el.innerHTML = 'NOT READ': el.innerHTML = 'READ';
  //          })
  //      }
  //  }
//
  // const cont = document.querySelector('.container')
  // cont.addEventListener('click', function(e) {
  //  toggleButton(e.target);
  // });
   
    const buttons = document.querySelectorAll('.but');
    console.log(buttons)
        for(let i = 0; i < buttons.length; i++){
            console.log(i);
        }
    