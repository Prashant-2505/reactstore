import { Send } from '@material-ui/icons'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]'>
       <h1 className='text-[50px] font-bold'>
        NewsLetter
       </h1>
       <h2 className='text-[30px] mt-2'>
        Always in a touch with us, for our products
       </h2>
       <div className='mt-5 min-w-[300px] bg-[white] justify-between flex min-h-[30px]'>
        <input type="email" placeholder='email' className=' rounded-md border-none outline-none w-[200px]'/>
        <button className='bg-[#4caf50] flex-1 rounded-sm'>
            <Send className=' text-white '/>
        </button>
       </div>
    </div>
  )
}

export default NewsLetter
