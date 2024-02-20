import React, { useEffect, useState } from 'react'
import Card from './Components/card'
import Spiner from './Components/spiner'

const Api = (props) => {
  const [apidata, setApidata] = useState([])
  // console.log("api", apidata)
  const [loder, setLoder] = useState(false)
  const { url, type, value, setSearch, } = props
  let endPoint
  if (type === "category") {
    endPoint = url
  }
  else {
    endPoint = url
  }

  const getApi = async () => {
    setLoder(true)
    const response = await fetch(`${process.env.REACT_APP_HOST}/${endPoint}&apiKey=${process.env.REACT_APP_KEY}`)
    const receiveData = await response.json()
    //  console.log ("receiveData",receiveData)
    if (receiveData.status === 'ok') {
      const key = receiveData.sources ?? receiveData.articles
      setApidata(key);
      setLoder(false)
      setSearch(false)
    }
  }

  useEffect(() => {
    getApi()
  }, [value])
  return (
    <div className='container'>
      <div className='row'>
        {
          loder ? <Spiner /> :
            apidata.map((e, index) => {
              // console.log("e",e)
              return (
                <div className='col-md-4' key={index}>
                  <Card title={e.name} description={e.description} url={e.url} country={e.country} flag={e.urlToImage} />
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default Api
