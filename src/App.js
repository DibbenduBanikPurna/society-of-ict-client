import React from 'react';
// import './App.css';
// import AddBook from './Components/AddBook/AddBook';
 import {
   BrowserRouter as Router,
   Switch,
   Route,
  
 } from "react-router-dom";
 import Login from './Components/Login/Login/Login';
 import Register from './Components/Login/Login/Register';
import  JobHolder from './Components/JobHolder/JobHolder'
 import Navbar from './Components/Navbar/Navbar';

 import useFirebase from './Hooks/UseFirebase';
 import Welcome from './Components/Welcome/Welcome';
import StudentInfo from './Components/StudentInfo/StudentInfo';
import StudentSingleInformation from './Components/StudentInfo/StudentSingleInformation';
import AddNewMember from './Components/AddNewMember/AddNewMember';
import Teacher from './Components/Teacher/Teacher';
import Notice from './Components/Notice/Notice';
import Registers from './Components/Register/Registers';
import Gallery from './Components/Gallery/Gallery';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const {users}=useFirebase()
  console.log(users)
  return (
    <div className="App">
      
       <Router>
        <Navbar/>
        <Switch>
           <Route exact path="/"> {users.email? <Welcome/> :<Login/>}  </Route> 
          <Route  path="/register"> <Register/> </Route>
         {users.email && <Route path="/studentinfo"> <StudentInfo/>  </Route>}
         {users.email && <Route path="/student/:id"> <StudentSingleInformation/>  </Route>}
          {users.email && <Route path="/addmember"> <AddNewMember/> </Route>}
          <Route path="/teachers"> <Teacher/> </Route>
         {users.email && <Route path="/notice"> <Notice/> </Route>}
          {users.email &&<Route path="/jobholder"> <JobHolder/> </Route>}
         {users.email && <Route  path="/registers">  <Registers/>  </Route>}
         {users.email  &&<Route path="/gallery"> <Gallery/> </Route>}
         <Route path="*"> <NotFound/></Route>
                  </Switch>
      </Router> 
      

    </div>
  );
}

export default App;
