import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/grid'




const WebRecipesScreen =  () => {
    const classes = useStyles();
    let [responseData, setResponseData] = React.useState('')

    const AxiosData = () => async () => { 
    
    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/list',
        params: {limit: '18', start: '0', tag: 'list.recipe.popular'},
        headers: {
          'x-rapidapi-key': '5c6edad120mshc25fda778d08f63p11d93djsnf2786f4cdf4a',
          'x-rapidapi-host': 'yummly2.p.rapidapi.com'
        }
      };
      
    const {data} =  await axios.request(options) 
    
    console.log(data)
    
    }
    
    
    


    return (
        <>
        dsa
{<AxiosData />


}        </>
    )
}


export default WebRecipesScreen
