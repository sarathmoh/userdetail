import React from 'react'
import { useSelector } from 'react-redux'
const Home = () => {
const details = useSelector((state) => state);
console.log(details);
    return (
        <div>

            <h1>Details are here</h1>

        </div>
    )
}

export default Home