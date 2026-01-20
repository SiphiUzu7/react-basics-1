import "./styles.css"

export default function App() {
  return (
    <>
      <h1>Musician Bucket List</h1>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Musician Name</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add Musician</button>
      </form>
      <h2 className="header">My List</h2>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Jimi Hendrix
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            MF DOOM
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>

  )
  
}