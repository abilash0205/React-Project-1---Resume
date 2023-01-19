import './app.css'
import Intro from './components/Intro'
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Intro />
      <section>
        <h1>Experience</h1>
        <Experience 
         role = "Full Stack Developer" 
         company = "Amazon"
         type = "Full Time"
         duration = "14 Months"
         descriptions = {["A diligent and organized individual seeking an Entry level position in the field of Software Development. Skilled at designing websites, innovative, and willing to contribute ideas and learn new things"]}
         skills = {["HTML", "CSS", "JavaScript", "React JS", "Node JS"]}
         />
         <Experience 
         role = "Senior Staff Engineer" 
         company = "Google"
         type = "Full Time"
         duration = "8 Months"
         descriptions = {["A diligent and organized individual seeking an Entry level position in the field of Software Development. Skilled at designing websites, innovative, and willing to contribute ideas and learn new things"]}
         skills = {["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Python", "Django"]}
         />
         <h1>Education</h1>
         <Education />
      </section>
    </div>
  );
}

export default App;