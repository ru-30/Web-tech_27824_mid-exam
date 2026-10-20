import { useMemo, useState } from 'react';
import ArrowIcon from '../components/ArrowIcon';
import BookCard from '../components/BookCard';
import books from '../data/books';

function BooksPage() {
  const [search, setSearch] = useState('');

  const filteredBooks = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return books;
    return books.filter((book) =>
      `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <section className="books-section" id="books">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A FEW GOOD PLACES TO START</span>
            <h2>On our <em>shelves.</em></h2>
          </div>
          <label className="search-box">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <circle cx="8.7" cy="8.7" r="5.8" />
              <path d="m13 13 4 4" />
            </svg>
            <input
              type="search"
              placeholder="Find a book or author"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search featured books by title, author, or category"
            />
          </label>
        </div>

        <div className="book-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="no-results">
            No featured books match &ldquo;{search}&rdquo;. Try another title or author.
          </p>
        )}

        <div className="books-footer">
          <p>Good stories are just the beginning.</p>
          <a className="text-link" href="#contact">Come browse the shelves <ArrowIcon /></a>
        </div>
      </div>
    </section>
  );
}

export default BooksPage;
