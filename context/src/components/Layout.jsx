import Content from './Content';
import Sidebar from './Sidebar';

const Layout = () => {
    console.log("this is my layout component")
   return (    
   <div> 
    <Sidebar/>     
    <Content />    
    </div>  
    );
}

export default Layout
