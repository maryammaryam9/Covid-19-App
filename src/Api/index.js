import axios from "axios";
const url="https://covid19.mathdro.id/api"

export const FetchData=async(country)=>{
let changeableUrl=url;
if(country && country!="global"){
    changeableUrl=`${url}/countries/${country}`  
}

    try {
    const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableUrl);
    // const modifydata={
    //     confirmed,
    //     recovered,
    //     deaths,
    //     lastUpdates}
    return {confirmed,recovered,deaths,lastUpdate};
} catch (error) {
    return error;
}
}
export const FetchDailyData=async()=>{
    try {
       const {data}=await axios.get(`${url}/daily`) 
       
     const modifydata=data.map((dailydata)=>({ 
        confirmed:dailydata.confirmed.total,
        recovered: (dailydata.confirmed.total)-(dailydata.deaths.total),

        deaths:dailydata.deaths.total,
        date:dailydata.reportDate
     }))
    //  console.log(modifydata)
       return modifydata;
    } catch (error) {
        console.log("error a araha hai charts mai") 
    }
}

export const fetchCountries = async ()=>{

  try {
      const {data : {countries}} = await axios.get(`${url}/countries`);      
      return countries.map((country) => country.name);
  } catch (error) {
      
  }
}

