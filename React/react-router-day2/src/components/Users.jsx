import { useSearchParams } from "react-router"

const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('sort'))

    // to get all the parameter in te URL
    // for(const [key, value] of searchParams.entries()){
    //     console.log(key, value)
    // }

    // when you have multiple atributes
    console.log(searchParams.getAll('sort'))



    const activeUsers = searchParams.get('filter') == 'active' ? true : false 
    
  return (
    <div>
      <button onClick={()=> setSearchParams({filter: 'active'})}>Active users</button>
      <button onClick={()=> setSearchParams({})}>Reset filter</button>

        {activeUsers ? <h1>Showing Active users</h1>: <h1>Showing inactive users</h1>}

    </div>
  )
}

export default Users
