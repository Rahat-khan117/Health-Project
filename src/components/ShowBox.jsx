

const ShowBox = ({doctor,handleDelete}) => {

    
    

    return (
        <div className='h-[170px] bg-white rounded-3xl mt-7 px-10'>
            <div className="flex justify-between ">
                <div className="mt-4">
                    <p className="text-3xl font-bold">{doctor.name}</p>
                    <p>{doctor.education}</p>
                </div>
                <div className="mt-9">
                    <p>Appointment Fee: {doctor.fee} Taka + vat</p>
                </div>
            </div>
            <div className="border-t-1 border-dashed mt-3">
                <hr />
            </div>
            <div>
                <button onClick={()=> {
                    handleDelete(doctor.id)
                }} className="btn text-red-600 border-red-600 w-full rounded-3xl mt-5 bg-[#c222220c] hover:bg-red-600 hover:text-white">Cancel Appointment</button>
                
            </div>
            
        </div>
    );
};

export default ShowBox;