import { useState } from "react"
import "./styles.css"

export default function App() {
  const [musicianItem, setMusicianItem] = useState([""])
  const [toListen, setToListen] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setToListen(currentToListen => {
      return[
        ...currentToListen,
        {id: crypto.randomUUID(), title: musicianItem, completed: false}
      
      ]
    })

    setMusicianItem("")
  }

  function toggleToListen(id, completed) {
    setToListen(currentToListen => {
      return currentToListen.map(toListen => {
        if (toListen.id === id) {
          return {...toListen, completed}
        }
        return toListen
        })
      })
  }

  function deleteToListen(id) {
    setToListen(currentToListen => {
      return currentToListen.filter(toListen => toListen.id !== id)
    })
  }

  return (
    <>
      <h1>Musician Bucket List</h1>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Musician Name</label>
          <input value={musicianItem} onChange={e => setMusicianItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add Musician</button>
      </form>
      <h2 className="header">My List</h2>
      <ul className="list">
        {toListen.map(toListen => {
          return  (
            <li key={toListen.id}>
              <label>
                <input type="checkbox" 
                checked={toListen.completed} 
                onChange={e => toggleToListen(toListen.id, e.target.checked)}
                />
                {toListen.title}
              </label>
              <button 
              onClick={() => deleteToListen(toListen.id)} 
              className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>

  )
  
}