import React from 'react';

const Question = ({ques}) => {
    return (
        <div className=' bg-white rounded-2xl flex flex-col gap-6 pt-7 pl-5'>
            <p className='text-2xl font-bold'>{ques.question}</p>
            <hr />
            <div>
                <p className='text-green-600'>Answer:</p>
                <p className='text-[#00000098]'>{ques.ans}</p>
            </div>
            <hr />
            <div className='flex gap-2 items-center mb-4'>
            <i className="fa-solid fa-calendar-days"></i>
            <p>Added at  {ques.date}</p>
            </div>
            
        </div>
    );
};

export default Question;