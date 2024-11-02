
import { useLoaderData, useParams } from "react-router-dom";
import { addToaStoreReadList, addToaStoreWishList } from "../../Utility/addToDB";

const BookDetail = () => {
    const { bookId } = useParams(); //bookId param ta dhorsi jeta main.jsx theke ashce
    // ekhane bookId ekta string hishebe ashbe, json file bookId ta int. eita k match korar jonno parseInt use korbo
    const id = parseInt(bookId);

    const data = useLoaderData()  // data load korar jonno use korbo
    const book = data.find(book => book.bookId === id);

    const handleMarkAsRead = (id) => {
        /*
        - snderstand what to store: amra bokId store korbo
        - where to store: databse/local storage e store korbo
        - array, list, collection e store korbo 
        - check if already read or not, 
        - if read, then do not add/remove from the list
        - if not read, then add to the readlist
        */

        addToaStoreReadList(id);
        addToaStoreWishList(id);

    }

    const { bookId: currentBookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    return (
        <div className="my-12 flex flex-row gap-10 justify-center ">
            {/* <h2>Book Details: {bookId}</h2>
            <img className="w-36" src={image} alt="book" />
            <button className="btn btn-outline mr-4 btn-accent">Read</button>
            <button className="btn btn-accent">WishList</button> */}

            <div className="w-full h-full ">
                <img src={image} className="rounded-xl" alt="" />
            </div>

            <div className="flex flex-col mt-1 space-y-3">
                <div className="space-y-1">
                    <h1 className="font-bold text-xl">{bookName}</h1>
                    <h3 className="font-bold text-base text-gray-600">By : {author}</h3>
                </div>
                <div className="mt-2 space-y-2">
                    <div className="border-t-2"></div>
                    <h3 className="font-bold text-base text-gray-600">{category}</h3>
                    <div className="border-b-2"></div>
                </div>

                <div className="mt-2">
                    <div><p><span className="font-bold text-base">Review :</span> {review}</p></div>
                    <div className="mt-2">
                        <p>
                            <span className="font-bold text-base">Tags :</span>
                            {tags.map((tag, id) => (
                                <span key={id} className="btn btn-sm badge p-3 work-sans text-green-700">{tag}</span>
                            ))}
                        </p>
                    </div>
                    <div className="border-b-2 mt-4"></div>
                </div>


                <div className="mt-2">
                    <div><p> <span className="font-semibold">Number of Pages : </span>{totalPages}</p></div>
                    <div><p> <span className="font-semibold">Publisher : </span>{publisher}</p></div>
                    <div><p> <span className="font-semibold">Year of Publishing :</span> {yearOfPublishing}</p></div>
                    <div><p className="gap-2 font-semibold">Rating: {rating} <i className="fa-regular fa-star-half-stroke  text-amber-500"></i></p></div>
                </div>
                <div className="mt-10 space-x-4">
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn border-2 border-[#83b28c] px-4 text-base">Mark as Read</button>
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn bg-[#83b28c] px-6text-base">Add to WishList </button>
                </div>
            </div>



        </div>
    );
};

export default BookDetail;