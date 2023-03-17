import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  {fetchContacts} from '../api/usrapi'
import {setContact}  from '../redux/userSlice'
const UsersCard = () => {
    const user = useSelector(state=>state.user)
    console.log('user',user)
const getuser=async()=>{
  const data = await fetchContacts()
  console.log('getuser',data)
  dispatch(setContact(data.userr))
}
const dispatch = useDispatch()

useEffect(()=>{
getuser()
},[])

  return (
    <div>
      {
        user.map((e)=>(<> <h1>{e.name}</h1> <img src={`http://localhost:5000/uploads/${e.photo}`} /> </>))
      }
    </div>
  )
}

export default UsersCard