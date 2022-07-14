import React, { useState } from 'react';

const Experience = (props) => {
  const [form, setForm] = useState(true);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [tasks, setTasks] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  
  const onClickField = (event) => {
    form === false ? setForm(true) : setForm(false)
    document.getElementById('edit_tool').style.display=''
    document.getElementById('finishEdit').addEventListener('click', () => {
      setForm(true);
    });
  }
  
  
    if (form) {
      return( 
        <div onClick={onClickField} className='bg-secondary-content p-12 border-b-8 border-primary'>
          <h1 className='font-bold text-xl align-center flex'>{props.header}</h1>
          
          <div className='flex-col justify-center align-center mt-6 ml-4'>
            <h3 className='font-bold text-xl'>{company ? company : 'Company Name'}</h3>
            <h3 className='font-bold text-lg'>{position ? position : 'Position At Company'}</h3>
          </div>
          
          <div className='flex gap-2 ml-4 text-xs'>
            <h3>{start ? start : 'Start Date'}</h3>
            <h3 >{end ? end : 'End Date'}</h3>
          </div>
          <h3 style={{whiteSpace: 'pre-wrap'}} className='mt-6 p-4'>{tasks ? tasks : 'Tasks/Responsibilites'}</h3>
         
        </div>
      )
    }
    else {
      return(
      <div className='bg-secondary-content p-12 border-b-8 border-primary w-full'>
        <h1 className='font-bold text-xl'>{props.header}</h1>
        <form className='w-full'>
        
        <div className='flex-col justify-center align-center mt-6 ml-4'>
          <div>
            <div className='tooltip tooltip-secondary' data-tip='What company did you work for?'> <label htmlFor="company"></label>
            <input className='font-bold text-xl' id="company"
            type="text" value={company} onChange={e => setCompany(e.target.value)}  placeholder="Company Name">
              </input>
            </div>
          </div>
          <div>
            <div className='tooltip tooltip-secondary' data-tip='What was your position at the company'> <label htmlFor="position"></label>
            <input className='font-bold text-lg' id="position"
            type="text" value={position} onChange={e => setPosition(e.target.value)} placeholder="Your Position">
              </input>
            </div>
          </div>
        </div>
        
        <div className='flex gap-2 ml-4 text-xs'>
          <div>
            <div className='tooltip tooltip-secondary' data-tip='Start date of your job'> <label htmlFor="start"></label>
            <input className='' id="start"
            type="text" value={start} onChange={e => setStart(e.target.value)} placeholder='Start Date'>
              </input>
            </div>
          </div>
          <div>
            <div className='tooltip tooltip-secondary' data-tip='End date of your job'> <label htmlFor="end"></label>
            <input className='' id="end"
            type="text" value={end} onChange={e => setEnd(e.target.value)} placeholder='End Date'>
              </input>
            </div>
          </div>
        </div>
        
        <div className='flex w-screen mt-6 p-4'>
          <div className='tooltip tooltip-secondary form-control w-full' data-tip='What are some things you did at work?'> <label htmlFor="tasks"></label>
          <textarea className='textarea textarea-primary resize rounded-md h-56 w-full' id="tasks"
           value={tasks} onChange={e => setTasks(e.target.value)} placeholder="write some things you did at work">
            </textarea>
          </div>
        </div>
      

        
      </form>

      </div>
      )
    }
  }

export default Experience;