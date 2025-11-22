// Prop-types - ensures the passed value is of the correct datatypes
//              age = Proptypes.number

// default-props - default value for props in case they are not passed from 
//                 the parent component
//                 name: Guest

import PropTypes from "prop-types";

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student