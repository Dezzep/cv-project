import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/User_info';
function App() {
 
  return (
    <div className="App">
      <Info test="Jacob"></Info>
      <Education test='education'></Education>
      <Experience test="experience"></Experience>
    
    </div>
  );
}

export default App;
