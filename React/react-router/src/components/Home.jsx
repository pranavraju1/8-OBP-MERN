import { useNavigate } from "react-router"

const Home = () => {
  
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate('/order-summary')}>Order Summary Page</button>
    </div>
  )
}

export default Home
