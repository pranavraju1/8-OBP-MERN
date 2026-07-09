

const Hello = () => {
  const name = "pranav";
  const age = 2;

  const isAdult = (age > 18) ? true : false;

  return (
    <>
      <h1>hello {name}, his age is {age}</h1>
      <h3>this person is: { (age > 18) ? 'adult' : 'not adult'}</h3>
      
      {isAdult ? <div>This content is for adults</div> : ""}
      
      {isAdult && <div>This content is for adults</div>}

    </>
  )
}

export default Hello
