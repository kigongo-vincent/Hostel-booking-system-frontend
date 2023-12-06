import { useContext } from "react"
import DataContext from "../context/DataContext"
import { useParams } from "react-router-dom"
import S_HeroSection from "../components/S_HeroSection"
import S_Footer from "../components/S_Footer"
import HostelInfo from "../components/HostelInfo"

import AllRooms from "../components/AllRooms"
const StudentViewRooms=()=>{
    let {id} = useParams()
    let {hostels, rooms} = useContext(DataContext)
    let hostel = hostels.filter(hostel=>hostel.id == id)
return(
    <>
    <S_HeroSection/>
    <HostelInfo hostel={hostel}/>
   <AllRooms rooms={rooms}/>
    <S_Footer/>
    </>

)
}
export default StudentViewRooms