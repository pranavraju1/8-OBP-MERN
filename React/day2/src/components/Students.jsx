
const Students = () => {
    const students = [
        {id:1, name:"Amit", status: "online"},
        {id:2, name:"Priya", status: "offline"},
        {id:3, name:"Vikram", status: "online"},
    ]

    return (
    <div>
      <ul>
        {
           students.length>0 && students.map( item => 
                <li key={item.id}> {item.name} {item.status == "online" ? "🟢" : "🔴"}  </li>
            )
        }
      </ul>
    </div>
  )
}

export default Students
