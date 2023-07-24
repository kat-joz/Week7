//import logo from './logo.svg';
import './App.css';
//import Info from './Info';
import Address1 from './Address';
import Addition2 from './Addition';
import TrainerInfo from './information';
import SalarySlip from './salary';
import Result from '.results';

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
  <Result name="Kasia" physics="60" chemistry="50" maths ="60"/>

  </>
  )
}

export default App;
