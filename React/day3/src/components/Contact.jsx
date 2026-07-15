import Button from "./Button"

const Contact = () => {
    const handleClickContact = () => {
        alert("alert from contact")
    }
  return (
    <div>
        <Button text={"From contact"} clickEvent={handleClickContact}/> 
    </div>
  )
}

export default Contact
