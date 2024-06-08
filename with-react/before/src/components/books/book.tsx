import "./book.css";

type BookProps = {
  title: string;
  author?: string;
};

const Book = ({ title, author }: BookProps) => {
  console.log(title);
  console.log(author);
  return (
    <article className="book">
      {title && <p className="book-title">{title}</p>}
      {author && <p className="book-author">{author}</p>}
    </article>
  );
};

export default Book;
