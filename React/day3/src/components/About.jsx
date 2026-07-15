import Button from "./Button"


const About = () => {
    const handleClickAbout = () => {
        alert("event from about")
    }
  return (
    <div>
        <Button text={"text from about"} clickEvent={handleClickAbout}/>
    </div>
  )
}

export default About
