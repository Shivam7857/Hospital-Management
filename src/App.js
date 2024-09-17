import {Route , Routes,Link} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Doctors from "./Doctors";
import Book from "./Book";
import Navbar from "./Navbar";
import "./index.css";
import "./App.css";
import Diabetic from "./Diabetic";
import Robotic from "./Robotic";
import Fetal from "./Fetal";
import Diab from "./Diab";
import Diab1 from "./Diab1.js";
import Migrane from "./Migrane.js";
import Reviews from './Reviews.js';

const App = () =>{
   
    return(
      <>
      <Navbar />
  

      
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/Services" element={<Services></Services>}/>
    <Route path="/Doctors" element={<Doctors></Doctors>}/>
    <Route path="/Book" element={<Book></Book>}/>
<Route path="/Reviews" element={<Reviews></Reviews>}/>
    <Route path="/Diabetic"element={<Diabetic></Diabetic>}/>
    <Route path="/Robotic"element={<Robotic></Robotic>}/>
    <Route path="/Fetal"element={<Fetal></Fetal>}/>
    <Route path="/Diab"element={<Diab></Diab>}/>
    <Route path="/Diab1"element={<Diab1></Diab1>}/>
    <Route path="/Migrane"element={<Migrane></Migrane>}/>
    


    

  </Routes>
  
     
      </>
    
    );
  }
  export default App;
