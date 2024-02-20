import React from 'react'
import Api from '../../Api'

const Technology = (props) => {


  const {value,setSearch,search}=props
  

  return (
    <div className='mt-5'>
     <Api url={ search ?`/everything?q=${value}`:"top-headlines/sources?category=technology"} type={"category"} value={value} setSearch={setSearch}/>
    </div>
  )
}

export default Technology
