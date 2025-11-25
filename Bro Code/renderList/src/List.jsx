import PropTypes from "prop-types"
import "./index.css"
function List(props) {
    // const fruits = [
    //     {id:1 ,name: 'Apple', calories: 95}, 
    //     {id:2 ,name: 'Banana', calories: 105}, 
    //     {id:3 ,name: 'Cherry', calories: 45}, 
    //     {id:4 ,name: 'Coconut', calories: 159}, 
    //     {id:5 ,name: 'Elderberry', calories: 37},
    // ];
    // fruits.sort((a, b) => a.name.localeCompare(b.name));// Sort fruits alphabetically by name
    // fruits.sort((a, b) => b.name.localeCompare(a.name));// Sort fruits in reverse alphabetical order by name
    // fruits.sort((a, b) => a.calories - b.calories);// Sort fruits by calories in ascending order
    // fruits.sort((a, b) => b.calories - a.calories);// Sort fruits by calories in descending order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);// Filter fruits with less than 100 calories
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);// Filter fruits with more than 100 calories

    const itemList = props.items
    const category = props.category
    const listItems = itemList.map((item) => 
    <li key={item.id}>
        {item.name}: &nbsp; <b>{item.calories}</b>
    </li>)
    return (
        <>
            <h3 className="list-category">
                {itemList.length > 0 ? category : null}
            </h3>
            <ol className="list-items">
                {itemList.length > 0 ? listItems : null}
            </ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
};
List.defaultProps = {
    category: "Catagory",
    items: [],
};

export default List;