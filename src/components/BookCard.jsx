function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className={`book-cover ${book.color}`}>
        <img src={book.cover} alt={`Cover of ${book.title}`} loading="lazy" />
        <span className="book-category">{book.category}</span>
        <span className="book-mark" aria-hidden="true">b.</span>
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.description}</p>
      </div>
    </article>
  );
}

export default BookCard;
