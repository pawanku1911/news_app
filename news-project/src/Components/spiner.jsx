import React from 'react'

const Spinner = () => {
    return ( 
        <div className="text-center p-5 mt-5 " style={{ height: '100vh' }}>
            <div className="spinner-border p-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner

