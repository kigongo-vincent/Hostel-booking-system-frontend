import { useContext } from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import DataContext from '../context/DataContext'

const Hostel=({hostel})=>{
    let {URL} = useContext(DataContext)
    let {lastHostel, setLastHostel} = useContext(AuthContext)
return (
    <div className="card no-border col-lg-4 overflow-hidden custom-shadow">
      
    <img src={`${URL}/${hostel.photo}`} alt="" className="card-image" style={{maxHeight: 250}}/>
    <div className="p-3">
    <b className="card-title no-border my-1">{hostel.name}</b>
    <p>Located, <u>{hostel.address}</u></p>
    <Link className='nav-link' to={`/student/hostel/${hostel.id}`} onClick={()=>setLastHostel(hostel.id)}>
    <button className="btn btn-dark py-1 px-3 rounded-edges w-50 px-2 d-flex align-items-center justify-content-between">
        View more <FaArrowAltCircleRight/>
    </button>
    </Link>
    </div>
</div>
)
}
export default Hostel