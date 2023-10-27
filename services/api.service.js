import https from 'https'
import { getKeyValue } from './storage.sevice.js'
import axios from 'axios'


const getWeather = async (city) =>{
    const token = await getKeyValue('token')
    if(!token){
        throw new Error('ERROR token')
    }


    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params:{
            q:city,
            appid:token,
            lang:'en',
            units:'metric'
        }

    })
    console.log(response.data);
} 


export default getWeather