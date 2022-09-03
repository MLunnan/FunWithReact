import React from "react"
import "./sidenav.css"

/**
 * Sidenav components returns a navbar on the left side of the page
 */

const Sidenav = () => {
    const navbarListArray = ["Home", "Gallery", "Contact", "About"]

    return (
        <div id="mySidenav" className="sidenav">
            {navbarListArray.map((item) => {
                return <button id={item}>{item}</button>
            })}
        </div>
    )
}
export default Sidenav