import { Chart, Countrypicker, Cards } from "./components";
import "./app.css"
import { FetchData } from "./Api/index";
// import {fetchCountries}from"./Api/index"

import { useEffect ,useState} from "react";
import axios from "axios";

function App() {
 let [globledata,setglobledata]=useState({
  recovered:{
    
  },
  confirmed:{

  },
  deaths:{

  }
 });

 let [country,setCountry]=useState("")

 
 useEffect(()=>{
   const BackendData = async () => {
     const data = await FetchData();
     console.log(data);
     setglobledata(data)
    }
    BackendData();
  },[]);
  console.log(globledata);

const handleCountryCount=async(country)=>{
  
  let response = await FetchData(country);

  setglobledata(response);

  setCountry(country);
  
  
  // console.log(country);
  // setglobledata(await FetchData(country));
  // // console.log(country)
  // setCountry(await FetchData(country));
  // console.log(country)

}

  return <>
    <div className="container">
    <div className="box">
   <h1 className="head">C</h1>
  <img  className="pic" src="covid.jpg"/>
  <h1 className="head2">VID-19</h1>
    </div>
    <Cards  data={globledata}></Cards>
    <Countrypicker handleCountryCount={handleCountryCount} />
    <Chart data={globledata} country={country}></Chart>
   </div>
  </>
}
export default App;
