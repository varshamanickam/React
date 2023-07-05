//import React from "react"
//import ReactDOM from "react-dom"

//const navbar = (
  //  <nav>
    //    <h1>Bob's Bistro</h1>
      //  <ul>
        //    <li>Menu</li>
          //  <li>About</li>
            //<li>Contact</li>
        //</ul>
    //</nav>
//)


const page =
(
    <div>
        <img src="react-logo-vector.svg" width="40px" margin-right= "10px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(page)

//ReactDOM.render(navbar, document.getElementById("root"))
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(navbar)