import "./App.css";

function App({ name, role, age, city }) {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="profile-img"
        />

        <h2>{name}</h2>
        <h4>{role}</h4>

        <div className="info">
          <p><strong>Age:</strong> {age}</p>
          <p><strong>City:</strong> {city}</p>
        </div>

        <button>View Profile</button>
      </div>
    </div>
  );
}

export default App;