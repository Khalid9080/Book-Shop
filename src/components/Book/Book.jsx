import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 border-2 shadow-gray-300 shadow-md p-8 ">
                <figure className="p-8 bg-[#83b28c] rounded-xl">
                    <img
                        src={image}
                        className="max-h-60 rounded-xl object-fill shadow-2xl"
                        alt="bookname" />
                </figure>
                <div className="mt-5 space-y-3">
                    <div className="flex gap-4">
                        {tags.map((tag, id) => (
                            <div key={id} className="btn btn-sm badge p-3 work-sans text-green-700">{tag}</div>
                        ))}
                    </div>
                    <h2 className="card-title playfair-display text-3xl ">
                        {bookName}
                    </h2>
                    <p className="font-semibold work-sans text-gray-600">By: {author}</p>
                    <div className="border-b border-dashed "> </div>
                    <div className="flex justify-between text-gray-600">
                        <h3 className="font-semibold work-sans">{category}</h3>
                        <h3 className="gap-2 font-semibold text-amber-500">{rating} <i className="fa-regular fa-star-half-stroke"></i></h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
