

const ShowBox = ({doctor,handleDelete}) => {

    
    

    return (
        <div className=' bg-white rounded-3xl mt-7 md:px-10 px-5'>
            <div className="flex justify-between ">
                <div className="mt-4">
                    <p className="md:text-3xl sm:text-2xl font-bold">{doctor.name}</p>
                    <p className="md:text-[16px] text-[15px]">{doctor.education}</p>
                </div>
                <div className="mt-9 ml-4">
                    <p>Appointment Fee: {doctor.fee} Taka + vat</p>
                </div>
            </div>
            <div className="border-t-1 border-dashed mt-3">
                <hr />
            </div>
            <div>
                <button onClick={()=> {
                    handleDelete(doctor.id)
                }} className="mb-4 btn text-red-600 border-red-600 w-full rounded-3xl mt-5 bg-[#c222220c] hover:bg-red-600 hover:text-white">Cancel Appointment</button>
                
            </div>
            
        </div>
    );
};

export default ShowBox;