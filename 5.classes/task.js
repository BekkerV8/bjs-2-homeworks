class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }

    fix() {
      this.state = this._state * 1.5;
    }

    set state(newState) {
      if (newState < 0) {
        this._state = 0;
        return;
      }
      if (newState > 100) {
        this._state = 100;
        return;
      }
       this._state = newState;
      }


    get state() {
      return this._state;
    }
  }

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }

  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book"

    }
  }

  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount, );
      this.type = "novel"
    }
  }

  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic"
    }
  }

  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective"
    }
  }


  class Library {
      constructor(name) {
        this.name = name;
        this.books = [];
      }

      addBook(book) {
        let bookState = book.state;
        if (bookState > 30) {
          this.books.push(book);
        }
      }

      findBookBy(type, value) {
        let foundBook = this.books.find((element) => element[type] === value);
        if (foundBook === undefined) {
          return null;
        } else {
          return foundBook;
        }
      }

      giveBookByName(bookName) {
        let givenBook = this.findBookBy("name", bookName);
        if (givenBook === undefined) {
          return null;
        } else {
          this.books = this.books.filter((element) => element.name !== bookName);
          return givenBook;
        }
      }
    }
