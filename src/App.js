import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/User_info';
import EditTool from './components/editTool';
function App() {
 
  return (
    <div className="App">
      <Info info="Info"/>
      <Education header='Education'></Education>
      <Experience test="Experience"></Experience>    
      <EditTool/>
    </div>
  );
}

export default App;
