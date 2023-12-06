import { createContext, useEffect, useState } from "react";
import TestImage from '../assets/download.png'
const DataContext = createContext({})
export const DataProvider = ({ children }) => {
    const [rooms, setRooms] = useState([])
    const [hostels, setHostels] = useState([])
    let URL = 'http://kigongovincent.pythonanywhere.com'
    return (
        <DataContext.Provider value={{
            hostels,
            rooms,
            URL,
            setHostels,
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext