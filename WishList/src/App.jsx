import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearWishList } from './wishListSlice';

function App() {
  const [inputValue, setInputValue] = useState('');
  const prevWishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (inputValue.trim()) {
      dispatch(addItem(inputValue));
      setInputValue(''); // Clear input after adding
    }
  };

  const handleClearWishList = () => {
    dispatch(clearWishList());
  };

  return (
    <>
      <h1>wishList: </h1>
      <ul>
        {prevWishList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input 
        type="text" 
        placeholder='wish to add e.g I want to live'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>
        add wish
      </button>
      <button onClick={handleClearWishList}>
        clear wish list
      </button>
    </>
  );
}

export default App;