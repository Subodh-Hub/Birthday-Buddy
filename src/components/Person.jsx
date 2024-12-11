import "../assets/styles/Person/person.css";
function Person(props) {
  return (
    <div className="person">
      <div className="image-container">
        {/* <img src={props.image} />
         */}
        <img src="https://images.unsplash.com/photo-1725590137329-f182b5a8fac3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="description">
        <h3>{props.name}</h3>
        <p>{props.age} age years old</p>
      </div>
    </div>
  );
}
export default Person;
