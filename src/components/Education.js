import React, { useState } from 'react';

const Education = (props) =>  {

    const [form, setForm] = useState(true)
    const [program, setProgram] = useState('')
    const [school, setSchool] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    
  const onClickField = () => {
    form === false ? setForm(true) : setForm(false)
    document.getElementById('edit_tool').style.display=''
    document.getElementById('finishEdit').addEventListener('click', () => {
      setForm(true);
    });
  }
    if (form) {
    return (
      <div onClick={onClickField} className='bg-secondary p-12 border-b-8 border-primary'>
        <h1 className='text-xl font-bold align-center flex'>{props.header}</h1>
        
        <div className='flex-col justify-center align-center mt-6 ml-4'>
          <h1 className='font-bold text-xl mb-2'>{school ? school : 'School'}</h1>
          <h1 className='font-bold text-lg mb-2'>{program ? program : 'Program'}</h1>
        </div>
        
        <div className='flex gap-2 ml-4 text-xs'>
          <h1>{startDate ? startDate : 'Start Date'}</h1>
          <h1>{endDate ? endDate : 'End Date'}</h1>
        </div>
      </div>
    );
    }
    else {
      return( 
        <div className='bg-secondary p-12 border-b-8 border-primary'>
                  <h1 className='text-xl font-bold'>{props.header}</h1>

          <div className='flex-col justify-center align-center mt-6 ml-4'>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='Name of your school'>
            
                <label htmlFor="school"></label>
                <input className=' font-bold text-xl mb-2 md:p-1 p-2' id="school"
                        type="text" value={school} onChange={e => setSchool(e.target.value)}  placeholder="School">
                </input>
              </div>
            </div>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='What did you study'>
                <label htmlFor="program"></label>
                <input className='font-bold text-lg mb-2 md:p-1 p-2' id="program"
                        type="text" value={program} onChange={e => setProgram(e.target.value)}  placeholder="Computer Sciences">
                </input>
              </div>
            </div>
          </div>
          <div className='flex gap-2 ml-4 text-xs'>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='Date you started your schooling'>
                <label htmlFor="startDate"></label>
                <input className='text-center md:p-1 p-2 m-0' id="startDate"
                        type="date" value={startDate} onChange={e => setStartDate(e.target.value)}  placeholder="Start Date">
                </input>
              </div>
            </div>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='Date you ended your schooling'>
                <label htmlFor="endDate"></label>
                <input className='text-center md:p-1 p-2 m-0' id="endDate"
                        type="date" value={endDate} onChange={e => setEndDate(e.target.value)}  placeholder="End Date">
                </input>
              </div>
          </div>
          </div>
          <button className='btn mt-6' onClick={e => {setForm(true)}}>Done Editing</button>
        </div>

      )
    }
}

export default Education