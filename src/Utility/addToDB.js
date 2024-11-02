import { toast } from "react-toastify";


const getStoredReadList=()=>{
    // ekhann theke list gula k paite hobe
    let storedListStr=localStorage.getItem('read-list');
    if(storedListStr){
        const storedList= JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
    
}

const addToaStoreReadList=(id)=>{
    const storedList = getStoredReadList();
    // check if id ase naki nai
    if(storedList.includes(id)){
        // already read
        console.log(id, 'Already exist in the readlist');
    }
    else{
        storedList.push(id);
        const storedListStr= JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book added to read list');
    }


}


const getStoredWishList=()=>{
    // ekhann theke list gula k paite hobe
    let storedWishListStr=localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList= JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
    
}

const addToaStoreWishList = (id) => {
    const storedWishList = getStoredWishList();
    // check if id exists in the list
    if (storedWishList.includes(id)) {
        // already in wish list
        console.log(id, 'Already exists in the wish list');
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);  // corrected key to 'wish-list'
    }
};

export {getStoredReadList, addToaStoreReadList,getStoredWishList,addToaStoreWishList};