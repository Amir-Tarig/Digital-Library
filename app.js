    const read = document.getElementById('Read');
    const notRead = document.getElementById('notRead')

    class Book{
        constructor(title,author,pages,isRead){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.isRead = isRead;
        }
    }

       //get the books from localStorage
       function getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    //add new book to localStorage 
    function addToStorage(book){ 
        const books = getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    //remove books from storage 
    function removeBook(author){
        const books = getBooks();
        books.forEach((book,index) => {
           if(book.author === author) {
                books.splice(index,1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
    
   
    function displayBooks (){
        let books = getBooks();
        books.filter(book => {
            addBook(book);
        });
    }

    function addBook(book){
        const container = document.querySelector(".container");
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = 
        `
        <span>${book.title}</span>
        <span>By</span>
        <span>${book.author}</span>
        <span class="delete">X</span>
        <button class='sbtn'>${book.isRead}</button>`;
        container.appendChild(div);
        
    }

   
    //clear the form fields after submition
    function clear(){
        document.querySelector('#title').value ='';
        document.querySelector('#author').value ='';
        document.querySelector('#pages').value ='';
        document.getElementsByName('isRead').checked = false;
    }

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

    //add event to display the book
    document.addEventListener('DOMContentLoaded', displayBooks);
    //event to add a book
        document.querySelector('.form').addEventListener('submit', (e) =>{
            e.preventDefault();
            books = getBooks();
            const title = document.querySelector('#title').value;
            const author = document.querySelector('#author').value;
            const pages = document.querySelector('#pages').value;
            let isRead = (read.checked)? read.value : notRead.value;
            const newBook = new Book(title, author,pages,isRead);
            
            const index = books.findIndex(book => book.title == newBook.title); 
            if(index === -1){
                addBook(newBook);
            }else{
                alert('This Book is exists already');
                return;
            }
          
            const buttons = Array.from(document.getElementsByClassName("sbtn"));
            const theLastButton = buttons.slice(-1)[0];
            if(notRead.checked){
                theLastButton.style.background = 'red';
                //notRead.style.background = 'red';
                //localStorage.setItem('theLastButton', JSON.stringify(theLastButton));
            }
            //addBook(newBook);
            books.push(newBook);
            addToStorage(newBook);
            clear();
        });

        function buttonStatus(){
            window.addEventListener('DOMContentLoaded', function() {
                const buttons = Array.from(document.querySelectorAll('.sbtn'));
                buttons.forEach((button, index) => {
                        if((button.textContent === 'NOT READ')){
                             buttons[index].style.background = 'red';
                        }
                });
              });
       }
       buttonStatus();
       
       function readStatus(){
            books = getBooks();
            //console.log(books)
            window.addEventListener('DOMContentLoaded', function() {
                const buttons = Array.from(document.querySelectorAll('.sbtn'));
                buttons.forEach((button, index) =>{
                    button.addEventListener('click',() =>{
                        if(button.textContent === 'READ'){
                            books[index].isRead = 'NOT READ';
                            button.style.background = 'red';
                            console.log( books[index].isRead);
                            localStorage.setItem('books', JSON.stringify(books));
                        }else{
                            button.textContent === 'READ';
                            books[index].isRead = 'READ';
                            console.log( books[index].isRead);
                            localStorage.setItem('books', JSON.stringify(books));
                        }
                    })
                });
            });
           // localStorage.setItem('books', JSON.stringify(books));
       }
       readStatus()

        //function to remove a book from the list 
        function deleteBook(arg){
            if(arg.classList.contains('delete')){
                arg.parentElement.remove();
            }
        }

         //eventListener for the two book buttons 
         const cont = document.querySelector('.container');
         cont.addEventListener('click', function(e) {
         toggleButton(e.target);
         deleteBook(e.target);
         removeBook(e.target.previousElementSibling.textContent);
         });
    
    
    