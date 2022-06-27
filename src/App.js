import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/User_info';
function App() {
 
  return (
    <div className="App">
      <Info info="Info"/>

      <Education test='Education'></Education>
      <Experience test="Experience"></Experience>
    
    </div>
  );
}

export default App;
