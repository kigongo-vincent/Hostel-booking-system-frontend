import Hostel from "./Hostel"
import { useContext,useEffect,useState } from "react"
import {getHostels} from '../EXtras/GetterFunctions'
import DataContext from "../context/DataContext"
const AllHostels = () => {
    let {hostels,setHostels, URL} = useContext(DataContext)
    let [load, setLoad] = useState(true)
    useEffect(()=>{
        getHostels(URL, setHostels, setLoad)
    },[])
    return (
        <>
        {
            load ?'Loading':
            <>
            <div className="my-5 container text">
            <p className="text-center my-4">Discover Hostels near Makerere</p>
            <div className="row gap-3 justify-content-center container" id="allhostels">
                {
                   hostels.length > 0 ?  hostels.map(hostel=>(
                    <Hostel hostel={hostel} key={hostel.id}/>
                )): <h1>No Hostels Found</h1>
                }
            </div>
        </div>
            </>
        }
        </>
    )
}
export default AllHostels