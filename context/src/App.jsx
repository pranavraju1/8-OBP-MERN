
import Layout from './components/Layout'
import AppProvider from './context/AppProvider'


const App = () => {
 
  return (
    <AppProvider>
        <div>      
          <h1>Prop Drilling Demo</h1>      
          <Layout userName={"Pranav"} />    
        </div>
    </AppProvider>
  )
}

export default App
