import axios from 'axios'

export const fetchContacts = async()=>{
    const {data} = await axios.get('http://localhost:5000/user/getit')
    return data 
}