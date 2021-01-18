import axios from 'axios'
import {BASE_URL} from '../config'

export const getMeals = async () => { 
  const res = await axios.get(`${BASE_URL}/shoppings`)
  console.log(res.data);
  return res.data
}