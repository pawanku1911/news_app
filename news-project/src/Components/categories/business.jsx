import React from 'react'
import Api from '../../Api'

const Business = (props) => {
  const {value,setSearch,search}=props
  // console.log("valeee",value)
  


  return (
    <div className='mt-5'>
    <Api url={ search ?`/everything?q=${value}`:"top-headlines/sources?category=business"} type={"category"} value={value} setSearch={setSearch}/>
    </div>
  )
}

export default Business
