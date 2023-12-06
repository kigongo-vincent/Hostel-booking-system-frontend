import Doctor from '../assets/doctor.svg'
import { Link } from 'react-router-dom'
const NotFound=()=>{
return(
  
     <div className="fullpage container d-flex align-items-center flex-wrap justify-content-center">
        <img src={Doctor} alt="" className='d-lg-block d-none'/>
        <div>
        <h1>The page that you want to access is sick</h1>
        <p className="text-secondary my-2">Please follow the link below to access the homepage</p>
        <Link className='my-5 btn btn-success' to="/">
        Back to home
        </Link>
        </div>
    </div>
)
}
export default NotFound