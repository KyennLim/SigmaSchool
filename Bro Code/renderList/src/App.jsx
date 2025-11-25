import List from './List.jsx';

function App() {
  const fruits = [
        {id:1 ,name: 'Apple', calories: 95}, 
        {id:2 ,name: 'Banana', calories: 105}, 
        {id:3 ,name: 'Cherry', calories: 45}, 
        {id:4 ,name: 'Coconut', calories: 159}, 
        {id:5 ,name: 'Elderberry', calories: 37},
    ];

    const vegetable = [
        {id:6 ,name: 'Potato', calories: 110}, 
        {id:7 ,name: 'Celery', calories: 15}, 
        {id:8 ,name: 'Carrot', calories: 25}, 
        {id:9 ,name: 'Corn', calories: 63}, 
        {id:10 ,name: 'Broccoli', calories: 50},
    ];
  return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetable} category="vegetable"/>
    </>
  )
}

export default App