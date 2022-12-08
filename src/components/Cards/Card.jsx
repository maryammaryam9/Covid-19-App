import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from "react-countup"
import "./Card.css"
export const Cards = (props) => {
  // if(!confirmed){
  //   return "Loading..."
  // }
  console.log(props)
  // if(!props.data.confimed){
  //   return 'loading....';
  // }
  return <>
        
    <div className="container">
      <Grid container className='bigcontainer' spacing={3} justify="center">
        <Grid item component={Card} sx={12} md={3} className="card1">
          <CardContent>
            <Typography color="textSecondary" gutterBottom><h3>Infected people</h3></Typography>
            <Typography varaint="h5">
            <CountUp
              start={0}
              end={props.data.confirmed.value}
              duration={2.5}
              separator=","
            />
              
              {/* {props.data.confirmed.value} */}
              </Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()} </Typography>
            <Typography varaint="body2">Number of active cases of Covid-19</Typography>
          </CardContent>
        </Grid >
        <Grid item component={Card}  sx={12} md={3} className="card2">
          <CardContent>
            <Typography color="textSecondary" gutterBottom> <h3>Recovered people</h3></Typography>
            <Typography varaint="h5">
            <CountUp
              start={0}
              end={( props.data.confirmed.value)-(props.data.deaths.value)}
              duration={2.5}
              separator=","
            />
              
              {/* {props.data.confirmed.value} */}
              </Typography>
             <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()} </Typography>
            <Typography varaint="body2">Number of Recoveries from  Covid-19</Typography>
          </CardContent>
        </Grid >
        <Grid item component={Card} sx={12} md={3} className="card3">
          <CardContent>
            <Typography color="textSecondary" gutterBottom><h3>Death people</h3></Typography>
            <Typography varaint="h5">
            <CountUp
              start={0}
              end={props.data.deaths.value}
              duration={2.5}
              separator=","
            />
              
              {/* {props.data.confirmed.value} */}
              </Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()} </Typography>
            <Typography varaint="body2">Number of Death caused by Covid-19</Typography>
          </CardContent>
        </Grid >
      </Grid>
    </div>
  </>
}
export default Cards; 