function Animal(props) {
    return <li>I am a {props.type}</li>;
  }
  
  function Zoo() {
    const animals = [
      { id: 1, type: 'Lion' },
      { id: 2, type: 'Tiger' },
      { id: 3, type: 'Bear' }
    ];
    
    return (
      <>
        <h1>Animals in the zoo:</h1>
        <ul>
          {animals.map((animal) => (
            <Animal key={animal.id} type={animal.type} />
          ))}
        </ul>
      </>
    );
  }
  
  export default Zoo
  