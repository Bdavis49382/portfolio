import './App.css';
import React,{useState, useEffect} from 'react';
import Project from './Project';
import projects from './projects.json';
const colors = {Personal: "#B3CDD1",School: "#577399",Both:"white"}
function App() {
  const [view,setView] = useState('School');
  const [sortBy,setSortBy] = useState('Date');
  const [isShown,setIsShown] = useState(false);
  
  const headerStyles = {
    backgroundColor: colors[view],
    minHeight: "80vh",
    textAlign: "center",
    fontSize: "calc(10px + 2vmin)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
  const buttonStyles = {
    margin: "0 auto",
    width:"100px",
    borderRadius:"3px"
  }
  useEffect(() => {

  },[sortBy]);
  function compareFunction(a,b) {
    if(sortBy==='Language'){
      return a.language[0].localeCompare(b.language[0]);
    }
    else{
      return 0;
    }
  }
  return (
    <div className="App">
      <header style={headerStyles}>
        <h1>Ben Davis</h1>
        <h4>Project Portfolio</h4>
      </header>
      <div style={{margin:"0 auto",width:"300px"}}>
        <button 
          onClick={event => setView(event.target.innerText)} 
          style={{...buttonStyles,backgroundColor:colors["School"]}}>
          School
        </button>
        <button 
          onClick={event => setView(event.target.innerText)} 
          style={{...buttonStyles,backgroundColor:colors["Personal"]}}>
          Personal
        </button>
        <button 
          onClick={event => setView(event.target.innerText)} 
          style={{...buttonStyles,backgroundColor:colors["Both"]}}>
          Both
        </button>
      </div>
      <div onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          style={{margin:"0 auto",display:"inline-block"}}>
        <span style={{display:"block"}}>Sort By... </span>
        <button>
          {sortBy}
        </button>
        {isShown && (
          <div>

            <button style={{display:  "block"}}onClick={event => setSortBy(event.target.innerText)}>Date</button>
            <button onClick={event => setSortBy(event.target.innerText)}>Language</button>
          </div>
        )}
      </div>
      <div className="projects">
        {Array.from(projects).sort(compareFunction).filter(project =>(((view==="School") === project.forSchool)||view==="Both")).map((project,index)=> {
          
          return <Project index={index} key={project.name} view={view} project={project} />
        })}
      </div>
    </div>
  );
}

export default App;
