const bookList = document.querySelector('#book-list');


console.log('#book-list next sibling:', bookList.nextSibling);
console.log('#book-list next element sibling:', bookList.nextElementSibling);
console.log('#book-list previous sibling:', bookList.previousSibling);
console.log('#book-list previous element sibling:', bookList.previousElementSibling);


console.log('book list parent element:', bookList.parentElement);
console.log('book list parent node:', bookList.parentNode);

console.log('all node children:');
Array.from(bookList.childNodes).forEach(function(node){
  console.log(node);
});

console.log('all element children:');
Array.from(bookList.children).forEach(function(node){
  console.log(node);
});

const titles = bookList.querySelectorAll('.name');

console.log('Book titles:');
Array.from(titles).forEach(function(title){
  console.log(title.textContent);
});

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

const books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
  book.textContent += ' (Book title)';
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>';


bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
