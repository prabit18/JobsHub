import './App.css';
import Navbar from './components/navbar.js';
import SingleSelectDropdown from './components/singleselectdropdown.js'
import JobList from './components/joblist.js';

function App() {
  return (
  <>
    <Navbar/>
    
    <div className="container">
      <div className='div-box'>
        We, at JobHub, are creating a go-to hub for uncovering the real issues candidates should be aware of before joining a company. Access 150+ company reviews here
      </div>
      <h3 style={{textAlign:'center'}}>
       <u style={{color:'blue'}}> 
        Search Jobs
       </u>
      </h3>
      {/* <SingleSelectDropdown/> */}
      <JobList/>
    </div>
  </>
  );
}

export default App;
