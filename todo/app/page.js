"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
 const [maintask, setmaintask] = useState([])

  const submit=(e)=>{
 e.preventDefault()
setmaintask([...maintask,{task,desc}])
console.log(maintask)
 setdesc("")
 settask("")
  }

  const done=(i)=>{
      let copyt=[...maintask]
      copyt.splice(i,1)
      setmaintask(copyt)
  }

  let renderTask="no task available";
 if(maintask.length>0){
  renderTask=maintask.map((t,i)=>{
    return(
      <li className='mt-2'>
        <div className='flex justify-between'>
          <h2>{t.task}</h2>
          <h2>{t.desc}</h2>
          <button onClick={()=>{
            done(i)
          }} className='bg-green-300 px-3 py-1'>Done</button>
        </div>
      </li>

    )
  })
 }
  return (
    <>
    <div className='bg-fuchsia-400 text-5xl p-6 text-center capitalize font-semibold'>to-do list</div>
    <form className='flex items-center justify-evenly py-10' onSubmit={submit}>
      <input
      placeholder='enter the task'
      className='bg-fuchsia-100 border-fuchsia-800 border-2 p-4 text-center capitalize text-fuchsia-950'
      value={task}
      onChange={(e)=>{
        settask(e.target.value)
      }}
      />
      <input
      placeholder='Description'
      className='bg-fuchsia-200 border-fuchsia-800 border-2 px-40 py-4 x text-center capitalize text-fuchsia-950'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-fuchsia-900 px-4 py-3 rounded-lg text-fuchsia-100 capitalize'>add task</button>

    </form>
    <div className='bg-slate-200 p-14'>
      <ul>
        {renderTask }
      </ul>

    </div>
    
    </>
  )
}

export default page