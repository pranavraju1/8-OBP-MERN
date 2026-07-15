
const Test = () => {
    
    const handleClick = (name) => {
        // console.log(name)
        alert(`hello: ${name}`)
    }
    
  return (
    <div>
      {/* <button onClick={handleClick}>Like</button> */}
      
      {/* <button onClick={() => handleClick("pranav")}>Like</button> */}

      <button onClick={()=>alert("like")}>Like</button>

    </div>
  )
}

export default Test
