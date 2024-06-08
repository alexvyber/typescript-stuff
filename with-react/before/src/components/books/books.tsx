import "./books.css";

export const Books = ({ children, count, onSubmit, onChange }: any) => {
  return (
    <section className="book-list gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onChange(e);
        }}
      >
        <label htmlFor="number-of-books-to-load" className="book-form-label">
          Number of Books to Load
        </label>
        <div className="flex">
          <input
            id="number-of-books-to-load"
            className="book-input w-full"
            type="number"
            min="0"
            max="20"
            value={count}
            onChange={onChange}
          />
          <button type="submit" className="book-button">
            Load Books
          </button>
        </div>
      </form>
      <div className="book-grid">{children}</div>
    </section>
  );
};

export default Books;
