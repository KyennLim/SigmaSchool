// Conditional rendering - allows you to control what is being 
//                         rendered in your application based
//                         on certain conditions
//                         (show, hide or change components)
import UserGreeting from "./UserGreeting";
import "./index.css";

function App() {
  return(
    <>
    <UserGreeting isLoggedIn={true}/>
    </>
  );
}

export default App