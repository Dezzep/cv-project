import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/User_info';
import EditTool from './components/editTool';
function App() {
 
  return (
    <div className="App">
      <Info info="Info"/>
      <Education editing='false' test='Education'></Education>
      <Experience test="Experience"></Experience>    
      <div><EditTool></EditTool> </div>
    </div>
  );
}

export default App;
