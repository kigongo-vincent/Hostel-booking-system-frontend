import { useContext } from "react"
import Room from "./Room"
import {FaBackward, FaForward} from 'react-icons/fa'
import DataContext from "../context/DataContext"
import Paypal from './Paypal'
const AllRooms=({rooms})=>{
    let {pages,page, pageSize, setPage} = useContext(DataContext)
    let pageNumbers = []
    for(let i =0;i<pages;i++){
        pageNumbers.push(i+1)
        console.log(pageNumbers.length)
    }
return (
    <div className="container p-5 custom-shadow">
        <Paypal/>
    <p className="text-center">Rooms Collection</p>
    <div className="row gap-3 justify-content-center" id="allrooms">
    {
        (rooms.slice((page-1)*pageSize, (pageSize*page))).map(room=>(
         <Room key={room.id} room={room}/>
        ))
    }
    <div className="d-flex my-5 justify-content-center align-items-center">
            <FaBackward className="pointer" onClick={()=>setPage(page >1 ? page-1: 1)}/>
           {
                pageNumbers.map(pageNumber=><span onClick={()=>setPage(pageNumber)} className={`mx-3 ${page===pageNumber?'bg-primary px-2 text-light rounded': ''} pointer`}>{pageNumber}</span>)
            }
            <FaForward className="pointer" onClick={()=>setPage(page >=0 && page < pages ? page+1: pages)}/>
           </div>
        </div>
   
</div>
)
}
export default AllRooms