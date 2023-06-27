import React from "react"

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Worasd!</h1>
    //     </div>
    // )

    return React.createElement("div", {id: "hello", className:"hisexy"}, 
        React.createElement("h1", null, "Hello"))

}


export default Hello