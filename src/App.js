import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/User_info';
import EditTool from './components/editTool';
import React from 'react';



// function App() {
export default class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      editTool:false,
      educationArrayNum: 1,
      educationCount: [0]
    }
    this.addEducationPressed = this.addEducationPressed.bind(this);
  }
  componentDidMount()
  {
    if(document.getElementById('finishEdit')) {
      this.setState({editTool:true})
    }
  }
  addEducationPressed()
  {
    this.setState({educationArrayNum: this.state.educationArrayNum + 1})
    this.setState({educationCount: [...this.state.educationCount, this.state.educationArrayNum]})
  }
 
  render() {
    if (this.state.editTool){
      return (
        <div className='App'>
           <div id='edit_tool' className='fixed top-0 right-0 flex justify-end align-middle'>
           <EditTool/>
           <button onClick={this.addEducationPressed} className='btn-sm btn-primary' id='add_education'>Add Education</button>
           </div>
          
          <Info header="Info"/>
          <Education header='Education'></Education>
         {this.state.educationCount.map((item) => {
          return (<Education key={`education${item}`}/>);
         })}
      
          <Experience header="Experience"></Experience>
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


