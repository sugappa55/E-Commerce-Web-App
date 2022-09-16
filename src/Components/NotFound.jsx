import pagenotfoundImage from "../Assests/pagenotfound.jpg"
export const NotFound = () => {
    return (
   
           <div className="text-center">
  
  <h1>Oops..! 404 Page Not Found</h1>
  <p>Looks like you came to wrong page on our server</p>
  <img src={pagenotfoundImage} height="500" width="500" alt="not found"  className='m-auto'/>
  </div>
        
  
    )
  }