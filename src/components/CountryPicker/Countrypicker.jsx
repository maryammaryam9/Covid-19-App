import React, { useEffect, useState } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import "./CountryPicker.css"
import { fetchCountries } from "../../Api/index"
const Countrypicker = ({ handleCountryCount}) => {
  // console.log( handleCountryCount)
  const [state, setState] = useState([]);
  
  useEffect(() => {
    const beckendData = async () => {
      const fetchdata = await fetchCountries();
      // console.log(fetchdata);
      setState(fetchdata);
    }
    beckendData();
  }, [setState]);



  return <>
    <div className="CountryContainer" >
      <FormControl >
        <NativeSelect className='abc' defaultValue=" "  onChange={(e)=>{

            handleCountryCount(e.target.value);
        }}>
        <option value="global">Global</option>
        {
         state.map((country,index)=>{
         return <option key={index} value={country}>{country}</option>
         })
          }
        </NativeSelect>
      </FormControl>
    </div>
  </>
}

export default Countrypicker 
