import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [lastHostel, setLastHostel] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [pending, setPending] = useState({})
    const [account, setAccount] = useState({
        groups: [
            ''
        ]
    })
    useEffect(()=>{
        if(pending.length > 0 && account.id){
            
        }
    })
    useEffect(() => {
        if (account) {
            console.log(account)
            console.log()

            switch (account.groups[0]) {
                case 'student':
                    navigate(`/student/${pending?'hostel/'+lastHostel:'dashboard'}`)
                    break
                default:

                    break
            }

        }
    }, [account])
    const signIn = () => {



    }
    return (
        <AuthContext.Provider value={{
            email,
            password,
            setEmail,
            setPassword,
            message,
            setAccount,
            account,
            signIn,
            pending,
            setPending,
            lastHostel,
            setLastHostel
        }}>
            {loading ? <h1>Loading....</h1> : children}
        </AuthContext.Provider>
    )
}
export default AuthContext
