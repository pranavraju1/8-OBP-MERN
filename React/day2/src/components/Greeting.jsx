import A from "./A"

const Greeting = (prop) => {
  return (
    <div>
      <h2>Hi! {prop.name}</h2>
      <A name={prop.name}/>
    </div>
  )
}

export default Greeting
