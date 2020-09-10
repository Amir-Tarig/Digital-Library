   //book prototype 
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
        books.unshift(book);
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
    
   //display the books 
    function displayBooks (){
        let books = getBooks();
        books.filter(book => {
            addBook(book);
        });
    }
    //creating a book card 
    function addBook(book){
        const container = document.querySelector(".container");
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = 
        `
        <span class ="bookTitle">${book.title}</span>
        
        <span>Author: ${book.author}</span>
        <span class="">Pages: ${book.pages}</span>
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
                el.innerHTML = 'UNREAD';
                el.style.background = 'red';
            }else{
                el.innerHTML = 'READ';
                el.style.background = 'linear-gradient(to left, #33ccff 0%, #000000 100%)';
            }
        }
    }

    //add event to display the book
    document.addEventListener('DOMContentLoaded', displayBooks);

    //event to add a new book and check for existing book 
        document.querySelector('.form').addEventListener('submit', (e) =>{
            e.preventDefault();
            books = getBooks();
            const title = document.querySelector('#title').value;
            const author = document.querySelector('#author').value;
            const pages = document.querySelector('#pages').value;
            const read = document.getElementById('Read');
            const notRead = document.getElementById('notRead')
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
            }
            
            books.unshift(newBook);
            addToStorage(newBook);
            clear();
        });


        function buttonStatus(){
            window.addEventListener('DOMContentLoaded', function() {
                const buttons = Array.from(document.querySelectorAll('.sbtn'));
                buttons.forEach((button, index) => {
                        if((button.textContent === 'UNREAD')){
                             buttons[index].style.background = 'red';
                        }
                });
              });
       }
       buttonStatus();
       
       //toggle the book read/notRead status and save it in the localStorage 
       function readStatus(){
            books = getBooks();
            //console.log(books)
            window.addEventListener('DOMContentLoaded', function() {
                const buttons = Array.from(document.querySelectorAll('.sbtn'));
                buttons.forEach((button, index) =>{
                    button.addEventListener('click',() =>{
                        if(button.textContent === 'READ'){
                            books[index].isRead = 'UNREAD';
                            button.style.background = 'red';
                            localStorage.setItem('books', JSON.stringify(books));
                        }else{
                            button.textContent === 'READ';
                            books[index].isRead = 'READ';
                            localStorage.setItem('books', JSON.stringify(books));
                        }
                    })
                });
            });
       }
       readStatus()

        //function to remove a book from the list 
        function deleteBook(arg){
            if(arg.classList.contains('delete')){
                if(confirm('Are you sure?')){
                    arg.parentElement.remove();
                }
                
            }
        }

         //eventListener for the two book buttons 
         const cont = document.querySelector('.container');
         cont.addEventListener('click', function(e) {
         toggleButton(e.target);
         deleteBook(e.target);
         removeBook(e.target.previousElementSibling.textContent);
         });
    
    
   
   //form manipulation
   function formCont(){
    const div1 = document.querySelector('.div1');
    const div2 = document.querySelector('.div2');
    const div3 = document.querySelector('.div3');
    const div4 = document.querySelector('.div4');
    const div5 = document.querySelector('.div5');
    const btnEl = document.querySelector('#btn');
    const addbtn = document.querySelector('.addbtn');
    const container = document.querySelector(".container");
    const formContainer = document.querySelector('.form-container');


    window.addEventListener('DOMContentLoaded', () => {
        addbtn.addEventListener('click',()=>{
            container.classList.add('bookContainer')
            formContainer.style.opacity = 1;
            div1.classList.add('one');
            div2.classList.add('two');
            div3.classList.add('three');
            div4.classList.add('four');
            div5.classList.add('five');
           
    });

    btnEl.addEventListener('click',() => {
      
            div1.classList.remove('one');
            div2.classList.remove('two');
            div3.classList.remove('three');
            div4.classList.remove('four');
            div5.classList.remove('five');

            div1.classList.add('one1');
            console.log(div1)
            div2.classList.add('two2');
            div3.classList.add('three3');
            div4.classList.add('four4');
            div5.classList.add('five5');

            setTimeout(() => {
                formContainer.style.opacity = 0;
            }, 700);
            
            setTimeout(() => {
                container.classList.remove('bookContainer');
            }, 1800);
    });
        formContainer.style.opacity = 0;
    })
   }
   formCont();