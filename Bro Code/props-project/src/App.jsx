// props - read-only property that are shared between components.
//         A parent can send data to a child component

// Prop-types - ensures the passed value is of the correct datatypes
//              age = Proptypes.number

import Student from "./Student";

function App(){
  return(
    <>
    <Student name="SpongeBob" age={30} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Squidward" age={50} isStudent={false} />
    <Student name="Sandy" age={27} isStudent={true} />
    <Student />
    </>

  );
}

export default App