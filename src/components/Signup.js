export default function Signup() {
    return (
        <form onSubmit={(e) => { 
            e.preventDefault()
            alert("Submitting!")}}>
            <input className="border"/>
            <button>Send</button>
        </form>
    )
}