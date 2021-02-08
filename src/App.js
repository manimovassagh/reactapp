import './App.css';
import Navbar from './Navbar';
import LikeCounter from './Date'



function App() {
  return (
    <div className="App">
    <div style={{padding:'0px 10px', display: 'flex', margin:'2px', alignItems:'space-between'}}>
      <Navbar/>
      
      <LikeCounter/>
     
      </div>
     <h1>Hi to React</h1>
     <p>this is really working easy!!!</p>
    </div>
  );
}

export default App;
