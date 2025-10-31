const getStoredDoctor = () => {
  const storedDoctorSTR = localStorage.getItem("readList");

  if (storedDoctorSTR) {
    const storedDoctorData = JSON.parse(storedDoctorSTR);
    return storedDoctorData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedDoctorData = getStoredDoctor();
  if (!storedDoctorData.includes(id)) {
    storedDoctorData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedDoctorData));
  }
};

const removeFromStoredDB = (id) => {
  const storedDoctorData = getStoredDoctor();
  const remainingDoctors = storedDoctorData.filter((doctorId) => doctorId !== id);
  localStorage.setItem("readList", JSON.stringify(remainingDoctors));
};

export { addToStoredDB, getStoredDoctor, removeFromStoredDB };
