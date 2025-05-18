import React, { useEffect } from 'react'


const Navbar = ({color}) => {
  //Case 1: Run on every render
  useEffect(() => {
    alert("I will run on every render")
  })
  
  //Case 2: Run on first render
   useEffect(() => {
    alert("Welcome to my page. This is my first render")
  },[])

  //Case 3: Run only when certain  values changes
   useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  // example of Cleanup function
  useEffect(() => {
   alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
    alert("component was unmounted")
    }
  }, [])

  
  
  return (
    <div>
      I am a navbar of {color} huhahahahahahahhaa...........
    </div>
  )
}

export default Navbar;
