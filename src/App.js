import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/User_info';
import EditTool from './components/editTool';
import React from 'react';


let classEditTools = 'fixed top-0 right-0 flex justify-end align-middle btn-group btn-group-vertical w-64 p-4 px-8 bg-warning/60'

// function App() {
export default class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      editTool:false,
      educationArrayNum: 1,
      educationCount: [0],
      experienceArrayNum: 1,
      experienceCount: [0],
      moveEditTools:0,
    }
    this.addEducationPressed = this.addEducationPressed.bind(this);
    this.deleteEducationPressed = this.deleteEducationPressed.bind(this);
    this.addExperiencePressed = this.addExperiencePressed.bind(this);
    this.deleteExperiencePressed = this.deleteExperiencePressed.bind(this);
    this.moveEditTools = this.moveEditTools.bind(this);
  }
  componentDidMount()
  {
    if(document.getElementById('finishEdit')) {
      this.setState({editTool:true})
    }
  }
  moveEditTools(){
    if (this.state.moveEditTools === 0) {
      classEditTools = 'fixed top-0 left-0 flex justify-end align-middle btn-group btn-group-vertical w-64 p-4 px-8 bg-warning/60'
      this.setState({moveEditTools: 1})
      
    }
    else {
      classEditTools = 'fixed top-0 right-0 flex justify-end align-middle btn-group btn-group-vertical w-64 p-4 px-8 bg-warning/60'
      this.setState({moveEditTools: 0})
     
    }
  }
  addEducationPressed()
  {
    this.setState({educationArrayNum: this.state.educationArrayNum + 1})
    this.setState({educationCount: [...this.state.educationCount, this.state.educationArrayNum]})

  }
  deleteEducationPressed()
  {
    if (this.state.educationCount.length !== 1){
      this.setState({educationArrayNum: this.state.educationArrayNum - 1})

    this.setState(prevState => ({ educationCount: prevState.educationCount.filter(num => num !== this.state.educationArrayNum -1)}));
    }  
  }
  addExperiencePressed()
   {
    this.setState({experienceArrayNum: this.state.experienceArrayNum + 1})
    this.setState({experienceCount: [...this.state.experienceCount, this.state.experienceArrayNum]})
   }
   deleteExperiencePressed()
   {
    if (this.state.experienceCount.length !== 1){
      this.setState({experienceArrayNum: this.state.experienceArrayNum - 1})

    this.setState(prevState => ({ experienceCount: prevState.experienceCount.filter(num => num !== this.state.experienceArrayNum -1)}));
    }  
   }
 
  render() {
    
    if (this.state.editTool){
      return (
        <div className='App'>
           <div id='edit_tool' className={classEditTools}>
            <h1 className='font-bold text-lg'>Edit Tools</h1>
           <button onClick={this.addEducationPressed} className='btn-sm btn-secondary' id='add_education'>Add Education</button>
           <button onClick={this.deleteEducationPressed} className='btn-sm btn-secondary bg-secondary-focus' id='delete_education'>Delete Education</button>
           <button onClick={this.addExperiencePressed} className='btn-sm btn-secondary' id='add_education'>Add Experience</button>
           <button onClick={this.deleteExperiencePressed} className='btn-sm btn-secondary bg-secondary-focus' id='delete_education'>Delete Experience</button>

           <button onClick={this.moveEditTools} className='btn-sm btn-info mt-4'>Move Edit Tools</button>
           <EditTool/>
           
           </div>
          
          <Info header="Info"/>
         
         
         <div>
           {this.state.educationCount.map((item, index) => {
            if (index === 0) {
              return (<Education header='education' key='0'/>)
            }
            else{
            return (<Education key={`education${item}`}/>);
            }
           })}
         </div>
           {this.state.experienceCount.map((item, index) => {
            if (index === 0) {
              return (<Experience header="Experience" key='0'/>)
            }
            else{
              return (<Experience key={`experience${item}`}/>)
            }
           })}
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
}


