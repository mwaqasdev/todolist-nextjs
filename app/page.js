"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title);
    // console.log(desc);
    setMainTask([...mainTask, { title, desc }])
    setTitle('')
    setDesc('')
  }
  const deleteHandler = (i) => {
    let copyTask = [...mainTask] // copy old tasks
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>
  // check
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between w-2/3'>
            <h4 className='text-2xl font-semibold' >{t.title} </h4>
            <h5 className='text-xl'>{t.desc} </h5>
          </div>
          <button className='cursor-pointer py-3 px-4 bg-red-400 text-white rounded font-bold '
            onClick={() => { deleteHandler(i) }}
          >Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white text-5xl font-bold p-5 text-center '>My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text'
          className='m-10 px-5 py-3 text-2xl border-blue-400 border-4'
          placeholder='enter title here'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <input type='text'
          className='m-10 px-5 py-3 text-2xl border-blue-400 border-4'
          placeholder='enter description here'
          value={desc}
          onChange={(e) => { setDesc(e.target.value) }}
        />
        <button className='bg-blue-400 text-white px-5 py-3 text-2xl
        cursor-pointer'>Add Task</button>
      </form>
      <hr />

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page