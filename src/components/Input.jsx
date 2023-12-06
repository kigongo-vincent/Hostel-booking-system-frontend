const Input = ({label, inputType, placeholder, setter, value}) => {
    return (
        <div className="my-3">
            <label className="my-3">{label}</label><br />
            <input type={inputType} placeholder={placeholder} className="no-border no-background px-4 py-2 w-increase login-input rounded" value={value} onChange={(e)=>setter(e.target.value)}/>
        </div>
    )
}
export default Input