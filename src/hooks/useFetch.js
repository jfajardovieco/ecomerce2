import  { useState } from 'react'
import axios from 'axios'


const useFetch = () => {
  const [infoApi, setInfoApi] = useState()



  const getApi = (url, config = {} ) =>{

    axios.get(url, config)

    .then(res => setInfoApi(res.data))
    .catch(err => console.log(err))

  }

  return [ infoApi, getApi ]
}


export default useFetch