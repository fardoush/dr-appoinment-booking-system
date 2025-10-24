const getStoredBook = () => {
const storedBookSTR = localStorage.getItem("readList");

if(storedBookSTR){
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
}
else {
    return [];
}
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
// alert("this id already exist");

    }
    else{
        storedBookData.push(id);
        // console.log(storedBookData);

        const  data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);
    }
}

export {addToStoredDB, getStoredBook};

// frontend@tulip-tech.odoo.com 