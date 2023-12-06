import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import { AuthProvider } from "./context/AuthContext"
import StudentDashboard from "./pages/StudentDashboard"
import NotFound from "./pages/NotFound"
import { DataProvider } from "./context/DataContext"
import StudentViewRooms from "./pages/StudentViewRooms"
import {FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowCircleDown} from 'react-icons/fa'
const App = () => {
    return (
        <AuthProvider>
             <DataProvider>
            <Routes>
                <Route index element={<Index />} />
                
                    <Route path="/student/dashboard" element={<StudentDashboard />} />
                    <Route path="/student/hostel/:id" element={<StudentViewRooms/>}/>
                
                <Route path="*" element={<NotFound/>}/>
            </Routes>
           <div className="nav-top bg-dark rounded">
           <a href="#navigation" className="nav-link px-3 py-1 text-light"><FaArrowAltCircleUp/></a>
           <a href="#footer" className="nav-link px-3 py-1 text-light"><FaArrowAltCircleDown/></a>
           </div>
       </DataProvider>
        </AuthProvider>
    )
}
export default App