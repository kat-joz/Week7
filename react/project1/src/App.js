//import logo from './logo.svg';
import './App.css';
//import Info from './Info';
import Address1 from './Address';
import Addition2 from './Addition';
import TrainerInfo from './information';
import SalarySlip from './salary';
import MyResult from './results';
import Children from './children';
import Records from './records';
import Records2 from './records2';
import Events from './events';
import Data from './data';
import WebData from './webdata';


function App() {
  return (
  <>
  <h1>
    <center>
      Welcome to the ReactJS Training
    </center>
  </h1>
  <TrainerInfo name="Kasia" address= "Manchester"/>
  <TrainerInfo name="Mike" address= "London"/>
  <Addition2/>
  <Address1/>
  <br/>
  <SalarySlip name="Kasia" salary="2000"/>
  <br/>
  <MyResult name="Kasia" physics="60" chemistry="50" maths="100"/>
  <br/>
  <Children> Hello Children </Children>
  <br/>
  <Records/>
  <br/>
  <Records2/>
  <br/>
  <Events/>
  <br/>
  <br/>
  <Data/>
  <br/>
  <WebData/>

  </>
  )
}

export default App;
