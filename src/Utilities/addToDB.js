const getStoredDoctor = () => {
const storedDoctorSTR = localStorage.getItem("readList");

if(storedDoctorSTR){
    const storedDoctorData = JSON.parse(storedDoctorSTR);
    return storedDoctorData;
}
else {
    return [];
}
}

const addToStoredDB = (id) => {
    const storedDoctorData = getStoredDoctor();
    if(storedDoctorData.includes(id)){
// alert("this id already exist");

    }
    else{
        storedDoctorData.push(id);
        // console.log(storedDoctorData);

        const  data = JSON.stringify(storedDoctorData);
        localStorage.setItem("readList",data);
    }
}

export {addToStoredDB, getStoredDoctor};

// frontend@tulip-tech.odoo.com 