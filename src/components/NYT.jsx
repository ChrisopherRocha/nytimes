import React, { useEffect } from 'react'
import axios from 'axios'

function NYT() {
    // const [someState, setSomeState] = useState("")

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${process.env.REACT_APP_NYT_API_KEY}`
            )
            console.log(res.data)
        }
        fetchAPI()
    }, [])
    

  return (
    <div>
      <h1>New York Times</h1>
    </div>
  )
}

export default NYT