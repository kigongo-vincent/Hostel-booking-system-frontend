import {FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const S_Footer = () => {
    return (
        <div className="bg-dark text-light py-5" id='footer'>
            <div className="container text-center">
                <p className="opacity-50">All rights reserved</p>
                <p className="opacity-75">avici webdesign solutions company Limited</p>
                <p>&copy;{new Date().getFullYear()}</p>
                <p className='text-secondary'>contact us via</p>
               <div className="d-flex align-items-center justify-content-center">
               <Link to="http://www.instagram/v.in.ce.nt._" className='nav-link'><FaInstagram className='mx-1' size={23}/> </Link>
                <Link to="http://www.linkedin.com/kigongovincent" className='nav-link'><FaLinkedin className='mx-1' size={23}/></Link>
                
                <Link to="http://www.youtube.com/@stemsdj" className='nav-link'><FaYoutube className='mx-1' size={23}/></Link>
               </div>
                
                
            </div>
        </div>
    )
}
export default S_Footer