
const Prodeucts = () => {
    const products = [
        {id: 4, name: 'game 3', price: 2000, inStock: true},
        {id: 1, name: 'PS5', price: 60000, inStock: true},
        {id: 2, name: 'game 1', price: 5000, inStock: true},
        {id: 3, name: 'game 2', price: 4000, inStock: false},
        {id: 5, name: 'game 4', price: 3000, inStock: false},
    ]
    const filter = "desc"


    // task1: show all the products that are inStock 
    
    // task2: show all the products that are inStock according to the filter 
    // ie if  filter is "asc" show in ascending order and if its "desc" show in descending order of price

    const filteredComponents = products.filter(item => item.inStock);

    // products.sort((a , b) =>a.price - b.price) //asc
    // products.sort((a , b) => b.price - a.price) //desc
    if(filter == "asc"){
        products.sort((a , b) =>a.price - b.price)
    }else{
        products.sort((a , b) => b.price - a.price)
    }

    return (
    <div>
      {/* {filteredComponents.length>0 && filteredComponents.map(item => <li key={item.id}> {item.name} </li>)} */}

      {
          products.filter(item => item.inStock)
          .map(item => <li key={item.id}> {item.name} - {item.price}</li>)}
    </div>
  )
}

export default Prodeucts
