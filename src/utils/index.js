import { toast } from "react-toastify";

export const getDoctor = () => {
    const favorites = localStorage.getItem("boxData");
    return favorites ? JSON.parse(favorites) : [];
};
  
  export const addDoctor = (doctorBox) => {
    const favorites = getDoctor();
  
    // Ensure it's actually an array
    if (!Array.isArray(favorites)) {
      console.warn("boxData was not an array. Resetting.");
      localStorage.setItem("boxData", JSON.stringify([]));
      return;
    }
  
    const isExist = favorites.find(p => p.id === doctorBox.id);
    if (isExist) return (
        toast.error("Appointment already scheduled for today",{
            position: "top-right",
            autoClose: 3000,
            toastId: `favorite-toast`
        })
    )
  
    favorites.push(doctorBox);
    localStorage.setItem("boxData", JSON.stringify(favorites)); //  Save the updated array
  };

//   for remove cart

export const removeCart = (id) => {
    const favorites = getDoctor()
    const remainDoctor = favorites.filter(doctor=> doctor.id !== id)
    localStorage.setItem("boxData", JSON.stringify(remainDoctor));
}