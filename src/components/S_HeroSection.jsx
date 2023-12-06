import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from '../context/AuthContext'
import {FaHandHoldingUsd, FaEye} from 'react-icons/fa'
import S_Navbar from "./S_Navbar"
const S_HeroSection = () => {
    const { account } = useContext(AuthContext)
    return (
        <div className="student-hero">
<div className="container">
<S_Navbar/>
<div className="container text-center text-light my-5 p-5 blur">
    <h1>Hello, {account.name}</h1>
    <p className="opacity-75 my-3">Discover the most amazing hostels Makerere Has got <br />to offer at the most reasonable of prices <FaHandHoldingUsd/></p>
    <Link className="nav-link" to={'/student/dashboard'}><u>View all Hostels</u> <FaEye/></Link>
</div>
</div>
        </div>
    )
}
export default S_HeroSection