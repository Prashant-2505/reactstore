import { Close } from '@material-ui/icons'
import React, { useState } from 'react'


const Announce = () => {

    const [announcestyle, setannounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')

    const handleClose = ()=>
    {
       setannounceStyle(announcestyle + " hidden")
    }

  return (
    <div className={announcestyle}>
       <h2>Hurry up its 40% off now</h2>
       <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce
