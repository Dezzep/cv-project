import React, { useState } from 'react';

const Info = (props) => {

  const [form, setForm] = useState(true);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
    
 
 const onClickField = (event) => {
    form === false ? setForm(true) : setForm(false);
    document.getElementById('edit_tool').style.display=''
    document.getElementById('finishEdit').addEventListener('click', () => {
      setForm(true)
    });
  }
    if (form) {
      return( 
        <div onClick={onClickField} className='bg-secondary'>
         
          <h3 className='font-bold text-4xl py-6 md:ml-12 pt-8 p-4 md:px-0'>{name ? name : <div className=' w-56 md:w-96 text-info-content bg-warning'>{'Click Here To Enter Your Name'}</div>}</h3>
          <div className='flex flex-col md:flex-row mt-6 gap-12 justify-evenly py-4 bg-accent-content text-accent p-4 md:px-0'>
            
          <h3>{email ? email : 'Your Email'}</h3>
          <h3>{number ? number : 'Your Phone Number'}</h3> 
          <h3>{location ? location : 'Where You Live'}</h3>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='bg-secondary'>
          
          <form>
          
          <div className='font-bold text-4xl py-6 md:ml-12 pt-8'>
            <div className='tooltip tooltip-secondary' data-tip='Enter your full name'> <label htmlFor="name"></label>
            <input className='' id="name"
            type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Smith">
              </input></div>
          </div>
          
          <div  className='flex flex-col md:flex-row mt-6 gap-12 justify-evenly py-4 bg-accent-content text-accent'>
        

          <div>
                <div className='tooltip tooltip-secondary' data-tip='enter your email address'> <label htmlFor="email"></label>
                <input className='text-center w-56 mt-2 p-2 md:mt-0 md:p-1' id="email"
                          type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="bobby@gmail.com">
                </input></div>
              </div>
            
            <div>
              <div className='tooltip tooltip-secondary' data-tip='enter your phone number'>
                <label htmlFor="number"></label><input className='text-center w-56 mt-2 p-2 md:mt-0 md:p-1' id="number"
              type="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="555-444-3333">
                </input></div>
            </div>
             
              
              <div>
              <div className='tooltip tooltip-secondary' data-tip='Where do you live?'> <label htmlFor="location"></label>
              <input className='text-center mt-2 p-2 md:mt-0 md:p-1 w-56' id="location"
              type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Montreal">
                </input></div>
            </div>
          </div>
          </form>
          <button className='btn mt-4 ml-8 mb-4' onClick={e => {setForm(true)}}>Done Editing</button>
        </div>
      );
    }
  
}

export default Info;
