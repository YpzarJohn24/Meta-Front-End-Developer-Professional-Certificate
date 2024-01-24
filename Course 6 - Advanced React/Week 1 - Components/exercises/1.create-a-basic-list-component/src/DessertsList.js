function DessertsList(props) {
  // Implement the component here.
  const lowCaloDessertsList = props.data
    .filter((dessert) => {
      /* Get all the low calories desserts */
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      /* Sort the above desserts by calories in ascending manner */
      return a.calories - b.calories;
    })
    .map((dessert) => {
      /* Transform the list */
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });

  return (
    <ul>
      {lowCaloDessertsList}
    </ul>
  );
}

export default DessertsList;