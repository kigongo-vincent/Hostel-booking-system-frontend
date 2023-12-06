export const getHostels=async(URL, setHostels, setLoading)=>{
    setLoading(true)
    const response = await fetch(`${URL}/hostels`)
    if(response.status == 200){
        const data = await response.json()
        setHostels(data)
    }else{
        alert('Something went wrong')
        setLoading(false)
    }
    setLoading(false)
}

