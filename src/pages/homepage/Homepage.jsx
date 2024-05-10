import React, { useEffect } from "react";
import { testApi } from "../../apis/api";

const Homepage = () => {

    //print hello world when page loads(automatica)
    useEffect(() => {
        console.log("hello")
    })

    //trigger test api
    testApi().then((res) => {
        console.log(res)// test api is working
    })

    return (
        <div>
            homepage!!!
        </div>
    )
}

export default Homepage; 