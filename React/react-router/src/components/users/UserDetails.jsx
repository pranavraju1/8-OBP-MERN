import { useParams } from "react-router"


const UserDetails = () => {
    console.log(window)
    // const params = useParams() 
    // console.log(params.id)

    // or
    const {id} = useParams();
    console.log(id)

    return (
    <div>
        <h2>This is detials of user with id {id}</h2>
    </div>
  )
}

export default UserDetails
