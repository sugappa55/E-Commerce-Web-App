import React from "react"
import pagenotfoundImage from "../Assests/pagenotfound.jpg"
 const NotFound = React.memo(() => {
    return (
   
           <div className="text-center">
  
  <h1>Oops..! 404 Page Not Found</h1>
  <p>Looks like you came to wrong page on our server</p>
  <img src={pagenotfoundImage} height="500" width="500" alt="not found"  className='m-auto object-cover'/>
  </div>
        
  
    )
  })
  export default NotFound