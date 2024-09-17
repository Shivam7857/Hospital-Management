import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';



const Home = () =>{
     return (<>
      <br>
     </br>

     <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.gbhamericanhospital.com/wp-content/uploads/2022/05/Slider-1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.gbhamericanhospital.com/wp-content/uploads/2022/05/Slider-Holding-Hands.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.rrmch.org/cms/wp-content/uploads/2024/02/Kidney-Transplant-Slider-image-2000x641.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<br></br>
<br></br>
 <br></br>
     
 <div className="container">
    <div className="row">
        <div className="col-md-3" id='facility'>
  <NavLink to="/Doctors"><img src="https://aiimspatna.edu.in/img/work/opdnew.png" class="card-img-top" alt="..."/></NavLink>
  <h5 class="card-title"><br></br>DOCTORS</h5>
</div>
    
        <div className="col-md-3" id='facility'>
  <NavLink to="/"><img src="https://aiimspatna.edu.in/img/work/emergency.jpg" class="card-img-top" alt="..."/></NavLink>
  <h5 class="card-title"><br></br>TRAUMA AND EMERGENCY</h5>
</div>
        <div className="col-md-3" id='facility'>
  <NavLink to="/Book"> <img src="https://aiimspatna.edu.in/img/work/telemedicine.png" class="card-img-top" alt="..."/></NavLink>
  <h5 class="card-title"><br></br>TELEMEDICINE</h5>
</div>
      
        <div className="col-md-3" id='facility'>
  <NavLink to="/Book"><img src="https://aiimspatna.edu.in/img/work/nursing.png" class="card-img-top" alt="..."/></NavLink>
  <h5 class="card-title"><br></br>OPD REGISTRATION</h5>
  </div>
  
    </div>
</div>
<br></br>
<br></br>
<br></br>
<div className="container">
    <div className="row">
        <div className="ok col-md-3">
        <img src={require('./images/hospital main.png')} />
  <div class="card-body">
  <h4 class="card-title">9+ HOSPITALS</h4>
  </div>
        </div>
        <div className="ok col-md-3">
        <img src={require('./images/volunteer.png')} />
  <div class="card-body">
    <h4 class="card-title">100+ DOCTORS</h4>
  </div>
        </div>
        <div className="ok col-md-3">
        <img src={require('./images/bed.png')} />
  <div class="card-body">
    <h4 class="card-title">200+ BEDS</h4>
</div>
        </div>
        <div className="col-md-3">
        <img src={require('./images/happiness.png')} />
  <div class="card-body">
    <h4 class="card-title">10,000+ HAPPY PATIENTS</h4>
</div>
        </div>
    </div>
</div>


    <br></br>
    <br></br>
    <div className="container" id='cards'>
    <div class="row">
  <div class="col-sm-3">
    <div class="card border-success">
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/cardiology_icon.svg" />
        <h5 class="card-title">Cardiology</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-success">
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neurology.svg" />
        <h5 class="card-title">Neurology</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-success">
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/paediatricurology.svg" /> 
        <h5 class="card-title">Pediatrics</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-success">
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/pulmonology.svg"/>
        <h5 class="card-title">Pulmonology</h5>
      </div>
    </div>
  </div>
</div>
</div>

<br></br>
    <br></br>
    <div className="container" id='cards'>
    <div class="row">
  <div class="col-sm-3">
    <div class="card border-success">
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dermatology.svg" />
        <h5 class="card-title">Dermatology</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-success">
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/nephrology.svg" />      
        <h5 class="card-title">Nephrology</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-success">
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/orthopaedic.svg" />
        <h5 class="card-title">Orthopaedic</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-success" >
    <div class="card-body">
    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ophthalmology.svg"/>   
        <h5 class="card-title">Ophthalmology</h5>
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
<br></br>


<div class="App">
  <h1> OUR DOCTORS</h1>
</div>
<div class="container">
<div class="row">
  <div class="col-sm-4">
    <div class="card border-alert mb-3">
      <div class="card-body" id='doctor'>
      <img src="https://d35oenyzp35321.cloudfront.net/Dr_Abhideep_Chaudhary_9f61965dec.jpg"/>
      <br></br>
      <br></br>
      <h6 class="fw-bold">Dr.Abhideep Chaudhary</h6>
      <h6>Vice chairman & HOD</h6>
      <p>Liver Transplant and Biliary Sciences, Robotic Surgery</p>
      <p>Experience:18+Years</p>
      
      </div>
      </div>
  
    </div>
    <div class="col-sm-4">
      <div class="card border-alert mb-3">
      <div class="card-body" id='doctor'>
      <img src="https://d35oenyzp35321.cloudfront.net/Dr_Atul_Sachdev_c0da7c7027.jpg" />
      <br></br>
      <br></br>
      <h6 class="fw-bold">Dr.Atul sachdev </h6>
      <h6>Director & HOD - Institute of Orthopedic Surgery</h6>
      <p>Orthopaedics & Joint Replacement </p>
      <p>Experience:20+Years</p>

      
  </div>
      </div>
    </div>

  <div class="col-sm-4 ">
    <div class="card border-alert mb-3">
      <div class="card-body" id='doctor'>
      
    <img src="https://d35oenyzp35321.cloudfront.net/Dr_Aparna_Sinha_6ba0365d05.JPG" />
  
    <br></br>
      <br></br>
      <br></br>
      <h6 class="fw-bold">Dr.Aparna Sinha</h6>
      <h6>Director - Department of Obstetrics & Gynecology</h6>
      <p>Obstetrics And Gynaecology, Infertility & IVF </p>
      <p>Experience:10+Years</p>

      </div>
  </div>
</div>
</div>
</div>

<div class="container">
   <NavLink to="/Doctors"><button type="button" class="btn-btn-primary" id='button'>FIND MORE DOCTORS </button>
</NavLink>
</div>
<br></br>
<div class="App">
  <h1> OUR BLOGS</h1>
</div>
<div class="container">
  <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={require('./images/doctor-vaccinating-senior-patient.jpg')} />
      <br></br>
      <br></br>
        <h5 class="card-title">Understanding Palliative Care: Its Scope and Beneficiaries</h5>
        <NavLink to="/Diabetic"><button type="button" class="btn-btn-primary" id='button'>READ</button>
        </NavLink>
      </div>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={require('./images/23768.jpg')} />
      <br></br>
      <br></br>
        <h5 class="card-title">What are the Advantages of Next-Generation Robotic Surgery</h5>
        <NavLink to="/Robotic"><button type="button" class="btn-btn-primary"id='button'>READ</button>
        </NavLink>
       
      </div>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={require('./images/still-life-positive-pregnancy-test.jpg')} />
      <br></br>
      <br></br>
      <br></br>
        <h5 class="card-title">Everything You Need to Know About Fetal Medicine </h5>
       
        <NavLink to="/Fetal"><button type="button" class="btn-btn-primary"id='button'>READ</button>
        </NavLink>
      </div>
    </div>
    </div>
</div>
</div>
<br></br>
<div class="container">
  <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={require('./images/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file.jpg')} />
      <br></br>
      <br></br>
        <h5 class="card-title"> Different Types of Diabetes and their Treatment</h5>

        <NavLink to="/Diab"><button type="button" class="btn-btn-primary"id='button'>READ</button>
        </NavLink>
      </div>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={require('./images/health-care-doctor-help-concept.jpg')} />
      <br></br>
      <br></br>
        <h5 class="card-title">What are the Early Signs and Symptoms of Diabetes</h5>
        <NavLink to="/Diab1"><button type="button" class="btn-btn-primary"id='button'>READ</button>
        </NavLink>
      </div>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={require('./images/Banner_Migraine.jpg')} />
      <br></br>
<br></br>
  
        <h5 class="card-title">Understanding Migraine: Symptoms, Management</h5>
        <NavLink to="/Migrane"><button type="button" class="btn-btn-primary"id='button'>READ</button>
        </NavLink>
      </div>
    </div>
    </div>
    </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    





  


     </>);
}

export default Home;