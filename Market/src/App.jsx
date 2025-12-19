
import { useSelector, useDispatch } from 'react-redux';
import { sellApple, restockApple } from './marketSlice'; 

function App() {
  const appleStock = useSelector((state) => state.cart.apple);
  const dispatch = useDispatch();

  const handleSell = () => {
    if (appleStock > 0) {
      dispatch(sellApple(1)); // Sell 1 apple
    }
  };

  const handleRestock = () => {
    dispatch(restockApple(1)); // Restock 1 apple
  };

  return (
    <>
      <h1>Apple Stock: {appleStock}</h1>
      <button onClick={handleSell} disabled={appleStock === 0}>
        Sell Apple
      </button>
      <button onClick={handleRestock}>
        Restock Apple
      </button>
    </>
  );
}

export default App;