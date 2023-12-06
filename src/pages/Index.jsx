import Input from '../components/Input'
import { FaArrowAltCircleRight, FaHotel } from 'react-icons/fa'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
const Index = () => {
    let { email, password, setEmail, setPassword, message, setAccount } = useContext(AuthContext)
    return (
        <div className=" d-flex align-items-center justify-content-center fullpage" style={{backgroundColor : "#f2f2f2"}}>
            <div className="d-lg-flex py-5 px-3 px-lg-0 custom-shadow bg-light rounded">
                <div className='mx-4'>
                    <p className='text-center'><FaHotel size={40} className='my-3'/><p>Hostel Booking System</p></p>
                    <Input label="Email" placeholder={'example@email.com'} inputType={'text'} value={email} setter={setEmail} />
                    <Input label="password" placeholder={'password must be of atleast 8 characters'} inputType={'password'} value={password} setter={setPassword} />
                    <p className="text-danger">{message}</p>
                    {
                        email.length > 0 && password.length > 8 ? <button onClick={()=> setAccount({
                            name: email,
                            id: 1,
                            groups: [
                                'student'
                            ]
                        })} className='w-increase py-2 rounded no-border d-flex px-4 align-items-center my-2 justify-content-between btn btn-dark text-light'>Continue<FaArrowAltCircleRight /></button> : <p className='opacity-50 text-center'>All fields must be filled</p>
                    }
                </div>
            </div>
        </div>
    )
}
export default Index