import React from 'react';
import Question from '../components/Question';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const data = useLoaderData();
    return (
        <div>
            <p className='text-4xl font-bold text-center pt-16'>Blogs</p>
            <p className='text-sm text-[#000000a1] text-center mt-5'>Let's Explore some basic concept that will make a good developer</p>
            <div className='md:px-16 px-5 mt-6 flex flex-col gap-5'>
               {
                data.map(ques => <Question ques={ques}></Question>)
               }
            </div>
        </div>
    );
};

export default Blogs;