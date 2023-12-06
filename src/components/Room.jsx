import { useContext } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Paypal from './Paypal'
const Room = ({ room }) => {
    let { account, pending, setPending } = useContext(AuthContext)
    let navigate = useNavigate()
    return (
        <div className="card no-border col-lg-4 overflow-hidden custom-shadow">
            
            <img src={room.image} alt="" className="card-image" style={{ maxHeight: 250 }} />
            <div className="p-3">
                <b className="card-title no-border my-1">{room.number}</b>
                <p>price, <span className="text-success">UGX {room.price}</span></p>
                <p>Room type &nbsp;<u className="text-secondary">{room.type}</u></p>
                <button
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => {
                    setPending(room)
                    // if (account.id) {
                    //     alert('order made')
                    // } else {

                    //    let login= confirm('Proceed to the login page')
                    //    if(login){
                    //     setPending(room.number)
                    //     navigate('/')
                    //    }
                    // }
                }} className="btn btn-success py-1 px-3 rounded-edges w-50 px-2 d-flex align-items-center justify-content-between">
                    Book Now<FaArrowRight />
                </button>
            </div>
        </div>
    )
}
export default Room