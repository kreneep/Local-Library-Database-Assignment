function findAccountById(accounts, id) {
  /*
  - iterate through the accounts obj. for matching id
  - use .find() method wto locate matching element using callback function 
  - for each iteration, function will compare each elements id; once found we will return 
  */
  return accounts.find(account => account.id === id);;
}

function sortAccountsByLastName(accounts) {
  /*
  - This function returns a sorted array of the provided account objects. 
    The objects should be sorted alphabetically by last name.

  - SORT() METHOD, ARROW FUNCTION, AND TERNARY OPERATOR 
  - sort() method to compare first two elememts (lastA, lastB) at a time
  - if unicode value of first char (lastA) is greater than of the second (lastB), positive 1 is returned (2nd element `b` should come before 1st element `a`);
      if false (-1) is returned then a should come before b
  - if comparisons are equal; comparison will return 0
*/
  return accounts.sort((lastA, lastB) => lastA.name.last > lastB.name.last ? 1 : -1);

}

function getAccountFullNames(accounts) {
  /*
    - this function should return an array of strings
    - I can use map() method to iterate through accounts object to locate the names in each element
    - I will need to use DESTRUCTERING to extract first/last name values to manipulate output or else output will be 
      shown in nested property format (e.g [{first: 'Rodriguez', last: 'Hawkins'}])
  */
  return accounts.map(( {name: {first, last} }) => `${first} ${last}`);

}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
