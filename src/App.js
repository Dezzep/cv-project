import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/User_info';
import EditTool from './components/editTool';
import React, { useEffect, useState } from 'react';

let classEditTools = 'fixed top-0 right-0 flex justify-end align-middle btn-group btn-group-vertical w-64 p-4 px-8 bg-warning/60 shadow-2xl z-50'
const App = () => {
  const [editTool, setEditTool] = useState(false);
  const [educationArrayNum, setEducationArrayNum] = useState(1);
  const [educationCount, setEducationCount] = useState([0]);
  const [experienceArrayNum, setExperienceArrayNum] = useState(1);
  const [experienceCount, setExperienceCount] = useState([0]);
  const [editToolMove, setEditToolMove] = useState(0);
  useEffect(() => {
    if(document.getElementById('finishEdit')) {
      setEditTool(true)
    }
  });
  const moveEditTools = () => {
    if (editToolMove === 0) {
      classEditTools = 'fixed bottom-0 right-0 flex justify-end align-middle btn-group btn-group-vertical w-64 p-4 px-8 bg-warning/60 shadow-2xl z-50'
      setEditToolMove(1);
      
    }
    else {
      classEditTools = 'fixed top-0 right-0 flex justify-end align-middle btn-group btn-group-vertical w-64 p-4 px-8 bg-warning/60 shadow-2xl z-50'
      setEditToolMove(0);
     
    }
  }
  const addEducationPressed = () =>
  {
    setEducationArrayNum(educationArrayNum + 1);
    setEducationCount([...educationCount, educationArrayNum])
  }
  const deleteEducationPressed = () =>
  {
    if (educationCount.length !== 1){
      setEducationArrayNum(educationArrayNum - 1)
      setEducationCount(educationCount.splice(0, educationArrayNum -1));
    }  
  }
  const addExperiencePressed = () =>
   {
    setExperienceArrayNum(experienceArrayNum + 1);
    setExperienceCount(([...experienceCount, experienceArrayNum]));
   }
  const deleteExperiencePressed = () =>
   {
    if (experienceCount.length !== 1){
      setExperienceArrayNum(experienceArrayNum - 1);
      setExperienceCount(experienceCount.splice(0, experienceArrayNum -1));
    }  
   }
    if (editTool){
      return (
        <div className='App bg-secondary-content h-screen'>
           <div id='edit_tool' className={classEditTools}>
            <h1 className='font-bold md:text-lg'>Edit Tools</h1>
           <button onClick={addEducationPressed} className='btn-sm btn-success' id='add_education'>Add Education</button>
           <button onClick={deleteEducationPressed} className='btn-sm btn-secondary bg-secondary-focus' id='delete_education'>Delete Education</button>
           <button onClick={addExperiencePressed} className='btn-sm btn-success' id='add_education'>Add Experience</button>
           <button onClick={deleteExperiencePressed} className='btn-sm btn-secondary bg-secondary-focus' id='delete_education'>Delete Experience</button>
           <button onClick={moveEditTools} className='btn-sm btn-info mt-4'>Move Edit Tools</button>
           <EditTool/> 
           </div>
          <Info header="Info"/>
         <div className='flex-col'>
               {experienceCount.map((item, index) => {
                if (index === 0) {
                  return (<Experience header="Work Experience" key='0'/>)
                }
                else{
                  return (<Experience key={`experience${item}`}/>)
                }
               })}
             </div>
           <div className='flex-col'>
             {educationCount.map((item, index) => {
              if (index === 0) {
                return (<Education header='Education' key='0'/>)
              }
              else{
              return (<Education key={`education${item}`}/>);
              }
             })}
           </div>
                   
         </div>
      )
    }
    else {
    return (
      <div className="App">
        
        <EditTool/>

      </div>
    );}
  }
export default App