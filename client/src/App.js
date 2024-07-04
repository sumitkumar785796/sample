import React, { useEffect, useState } from 'react'
import StoreData from './StoreData'
import axios from 'axios'
const App = () => {
  const [view, setView] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/data')
        setView(response.data.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="text-center">View All Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              view.map((element,index)=>(
                <StoreData
                  key={index}
                  index={index}
                  fname={element.fname}
                  age={element.age}
                />
              ))
            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App