function findAuthorById(authors, id) {
  /*
    This function should return the author object that has the matching ID.
  
    - we can use find() method again to find matching author id element

  */
  const findAuthor = authors.find(author => author.id === id);
  return findAuthor;

}

function findBookById(books, id) {
  /*
    This function should return the book object that has the matching ID.
    - we can also use find() method to match book id
  */
  const findBook = books.find(book => book.id === id);
  return findBook;


}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
