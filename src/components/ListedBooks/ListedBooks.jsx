import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    
   
    useEffect(() => {
        const storedReadList= getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList,allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

    }, []);

    return (
        // ideally we will directly fetch the data from the database and show it here
        <div>
            <h3 className="text-3xl font-semibold my-8"> Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    {/* jegulo boi porsi oigulo dekha jabe */}
                    <h2 className='text-2xl'>Books I read{readList.length}</h2>
                    <div className='space-y-7'>
                         {
                        readList.map(book => <Book  key={book.bookId} book={book}></Book>)
                    }

                    </div>
                   
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;