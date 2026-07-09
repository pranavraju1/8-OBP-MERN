import "./styles.css"
const Test = () => {

    const names = ['pranav', 'raju', 'anjali', 'meghna'];
    const dogImgUrl = "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    const boxStyle = 

  return (
    <div>
      <ul>
        {names.map((item) => (
          <li>{item}</li>
        ))}

        {names.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      {/* <img src={dogImgUrl}/> */}

      <div
        style={{
          height: "200px",
          width: "500px",
          backgroundColor: "purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
}

export default Test
