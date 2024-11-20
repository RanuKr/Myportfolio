import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year : 2024,
        title : 'Networking',
        details : 'Networking Basics',
        link: 'https://drive.google.com/file/d/1_O5RzmPwrpvvYGD9p5OYQP3eoOocCzO3/view'
    },
    {
        year : 2023,
        title : 'SQL',
        details : 'Hackerrank SQL Basic',
        link: 'https://www.hackerrank.com/certificates/7e094741b566'
    },
    {
        year : 2023,
        title : 'Kaggle',
        details : 'BigQuery Kaggle',
        link: 'https://drive.google.com/file/d/1B2i__Xl6GPG0YwpjqP4vTKV1Vh3O9ARz/view'
    },
    {
        year : 2023,
        title : 'web Development',
        details : 'SCHOLIVERSE EDUCARE PRIVATE LIMITED',
        link: 'https://drive.google.com/file/d/1LqMa2_oyeGzHruZmpqYvpTJECOPtvygD/view'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Certificates</h1>
        {data.map((item, id) => (
            <WorkItem 
                key={id} 
                year={item.year} 
                title={item.title} 
                details={item.details} 
                link={item.link}
            />
        ))}
    </div>
  )
}

export default Work
