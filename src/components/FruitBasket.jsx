function Fruit(props) {
    return <li>{props.name}</li>;
  }
  
  function FruitBasket() {
    const fruits = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' }
    ];
    
    return (
      <>
        <h1>Fruits in the basket:</h1>
        <ul>
          {fruits.map((fruit) => (
            <Fruit key={fruit.id} name={fruit.name} />
          ))}
        </ul>
      </>
    );
  }
  
  export default FruitBasket