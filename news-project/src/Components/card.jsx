import React from 'react'
import "./style.css"
import { useLocation } from 'react-router-dom';


const Card = (props) => {
 
  const { title, flag,  description, url,publishedAt } = props;
  const location = useLocation()

   return (
    <div className="container  d-flex justify-content-center align-items-center " >
      <div className={`card ${location.pathname === "/country" ? "contai-flag" : ""} bg-dark text-light fw-bold`} style={{ width: "18rem", cursor: "pointer" }}>
        {flag ? <img src={flag} className="card-img-top" alt="..." style={{ height: "160px" }} /> : "  "}
        
        <div className="card-body mt-2 ">
           
          <h6 className="card-title "> Title:-{title}</h6><hr></hr>
          {/* {author ? <p className='mt-3'>Author- {author}</p>:""} */}
          {publishedAt?<p className=''>Publish-{publishedAt}</p>:""}
          {description ? <p  className='mt-2'> <br></br> {description}</p> : ""}
          {url ? <a href={url}> <button className='btn btn-danger mt-2'>More Info</button></a> : ""}</div>
      </div>
    </div>
    

  )
}

export default Card
