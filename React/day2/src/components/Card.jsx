
const Card = ({title , children}) => {

  return (
    <div style={{border:"2px solid #333", padding: "20px", borderRadius: "8px"}}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Card
