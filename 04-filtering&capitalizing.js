const books = [
    { author: 'John Doe', title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { author: 'Mickey Spillane', title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { author: 'Anne Rice', title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { author: 'Mary Higgins Clark', title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { author: 'Nora Roberts', title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { author: 'Tom Clancy', title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { author: 'Nicholas Sparks', title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { author: 'Gabriel García Márquez', title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { author: 'T. S. Eliot', title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let Library = books.filter( function (bk) {
//      return bk.genre === "History"
//   } )
//   //console.log(Library);

//   let Library2 = books.filter((bk) => bk.publish > 2000)
// //   console.log(Library2);

//   let Library3 = books.filter((bk) => bk.title === "Science")
//     // console.log(Library3);

//   let Library4 = books.filter((bk) => bk.title === "Book Eight")
//         // console.log(Library4);

//    let Library5 = books.filter((bk) => bk.publish >= 1995 && bk.genre === "Science")
//         console.log(Library5);

function filterBooksAfter2010withCapitalizedAuthors(books) {
    // Filter books published after 2010
    const booksAfter2010 = books.filter(book => book.publish >= 2010);
  
    // Capitalize author names and create a new array
    const capitalizedBooks = booksAfter2010.map(book => {
      const capitalizedAuthor = book.author.toUpperCase();
      return { ...book, author: capitalizedAuthor };
    });
  
    return capitalizedBooks;
  };
  
  const capitalizedBooks = filterBooksAfter2010withCapitalizedAuthors(books);
  console.log(capitalizedBooks);