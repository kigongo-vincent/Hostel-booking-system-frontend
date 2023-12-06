import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const S_Navbar = () => {
    let { account, setAccount } = useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="navigation">
            <div className="container">
                <Link className="navbar-brand" to={'/student/dashboard'}>
                    Hostel Booking System
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-target="#navmenu"
                    data-bs-toggle="collapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item rounded">
                            <Link to={'/student/dashboard'} className="nav-link d-flex align-items-center">
                                <FaHome className="mx-2" />Home
                            </Link>
                        </li>
                        <li className="nav-item relative rounded" >
                            {
                                account.id && <Link className="nav-link d-flex align-items-center absolute1">
                                    <FaUser className="mx-2" />Account Info
                                </Link>
                            }
                        </li>
                        <li className="nav-item rounded">
                            {
                                account.id ? <Link className="nav-link d-flex align-items-center" onClick={() => setAccount({
                                    name: email,
                                    id: 1,
                                    groups: [
                                        'student'
                                    ]
                                })}>
                                    <FaSignOutAlt className="mx-2" />Signout
                                </Link> : <Link className="nav-link d-flex align-items-center" to={'/'}>
                                    <FaSignInAlt className="mx-2" />Login
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default S_Navbar