import React, { useState } from 'react'
import { Tabs, TabContainer } from 'react-bootstrap'
import { Tab } from 'bootstrap'
import { useEffect } from 'react'
import Card from '../card'
import Spinner from '../spiner'

const Country = () => {
  const [value, setvalue] = useState("in")
  const [countryData, setCountrydata] = useState([])
  const [loader, setLoder] = useState(false)

  const onSelect = (newValue) => {
    getCountryapi(newValue)
  }

  const getCountryapi = async (value) => {
    setLoder(true)
    const response = await fetch(`${process.env.REACT_APP_HOST}/top-headlines?country=${value}&apiKey=848f83224249476bb9299f79fda550af`)
    const receiveData = await response.json()
    // console.log("receiveData", receiveData)
    if (receiveData.status === 'ok') {
      setCountrydata(receiveData.articles);
      setLoder(false)
    }
  }
  useEffect(() => {
    getCountryapi(value)
  }, [])

  return (
    <div className='container-fluid  d-flex flex-unset'>

      <Tabs defaultActiveKey={value}

        id='tabs' onSelect={onSelect}
        className='tab d-flex flex-column fw-bold  bg-dark   '>
        <Tab eventKey='in' title="india" className=' p-5 mt-4 ms-5 '>
          <TabContainer >
            <div className="container">
              <div className={`row ${loader ? 'position-relative' : ""}`}>
                {loader ?
                  <div className='col-md-4 position-absolute' style={{ top: "200px", left: "550px" }}>
                    <Spinner />
                  </div> :

                  countryData.map((e, index) => {
                   

                    return (

                      <div className='col-md-4 ' key={index}>
                        <Card flag={e.urlToImage} name={e.author} title={e.title} author={e.author}
                          url={e.url} publishedAt={e.publishedAt} />

                      </div>
                    )
                  })
                }
              </div>
            </div>


          </TabContainer>
        </Tab>
        <Tab eventKey='us' title="unitedState" className="p-5 mt-3 ms-5">
          <TabContainer>
            <div className="container">
              <div className={`row ${loader ? 'position-relative' : ""}`}>
                {loader ?
                  <div className='col-md-4 position-absolute' style={{ top: "200px", left: "550px" }}>
                    <Spinner />
                  </div> :

                  countryData.map((e, index) => {
                    // console.log("e", e)

                    return (

                      <div className='col-md-4 '>
                        <Card flag={e.urlToImage} name={e.author} title={e.title} author={e.author}
                          url={e.url} />

                      </div>
                    )
                  })
                }
              </div>
            </div>


          </TabContainer>
        </Tab>

        <Tab eventKey='jp' title="japan" className="p-5 mt-3 ms-5">
          <div className="container">
            <div className={`row ${loader ? 'position-relative' : ""}`}>
              {loader ?
                <div className='col-md-4 position-absolute' style={{ top: "200px", left: "550px" }}>
                  <Spinner />
                </div> :

                countryData.map((e, index) => {
                  // console.log("e", e)

                  return (

                    <div className='col-md-4 '>
                      <Card flag={e.urlToImage} name={e.author} title={e.title} author={e.author}
                        url={e.url} />

                    </div>
                  )
                })
              }
            </div>
          </div>


        </Tab>
        <Tab eventKey='ca' title="canada" className="p-5 mt-3 ms-5">
          <TabContainer>

            <div className="container">
              <div className={`row ${loader ? 'position-relative' : ""}`}>
                {loader ?
                  <div className='col-md-4 position-absolute' style={{ top: "200px", left: "550px" }}>
                    <Spinner />
                  </div> :

                  countryData.map((e, index) => {
                    return (

                      <div className='col-md-4 '>
                        <Card flag={e.urlToImage} name={e.author} title={e.title} author={e.author}
                          url={e.url} />

                      </div>
                    )
                  })
                }
              </div>
            </div>

          </TabContainer>
        </Tab>
        <Tab eventKey='au' title="Australia" className="p-5 mt-3 ms-5">
          <TabContainer>

            <div className="container">
              <div className={`row ${loader ? 'position-relative' : ""}`}>
                {loader ?
                  <div className='col-md-4 position-absolute' style={{ top: "200px", left: "550px" }}>
                    <Spinner />
                  </div> :

                  countryData.map((e, index) => {
                    return (
                      <div className='col-md-4 '>
                        <Card flag={e.urlToImage} name={e.author} title={e.title} author={e.author}
                          url={e.url} />

                      </div>
                    )
                  })
                }
              </div>
            </div>
          </TabContainer>
        </Tab>


        <Tab eventKey='ch' title="switzerland" className=" p-5 mt-3 ms-5">
          <TabContainer>

            <div className="container">
              <div className={`row ${loader ? 'position-relative' : ""}`}>
                {loader ?
                  <div className='col-md-4 position-absolute' style={{ top: "200px", left: "550px" }}>
                    <Spinner />
                  </div> :

                  countryData.map((e, index) => {
                    return (
                      <div className='col-md-4 '>
                        <Card flag={e.urlToImage} name={e.author} title={e.title} author={e.author}
                          url={e.url} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </TabContainer>
        </Tab>

        <Tab eventKey='de' title="Germany" className="p-5 mt-3 ms-5">
          <TabContainer>

            <div className="container">
              <div className={`row ${loader ? 'position-relative' : ""}`}>
                {loader ?
                  <div className='col-md-4 position-absolute' style={{ top: "200px", left: "550px" }}>
                    <Spinner />
                  </div> :

                  countryData.map((e, index) => {
                    // console.log("e", e)
                    return (
                      <div className='col-md-4 '>
                        <Card flag={e.urlToImage} name={e.author} title={e.title} author={e.author}
                          url={e.url} />

                      </div>
                    )
                  })
                }
              </div>
            </div>


          </TabContainer>
        </Tab>
      </Tabs>


    </div>


  )
}

export default Country
