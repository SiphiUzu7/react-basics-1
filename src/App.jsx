import { useEffect, useState } from "react"
import "./styles.css"
import { MusicianListForm } from "./MusicianListForm"
import { MusicianList } from "./MusicianList"

 
export default function App() {
  const [toListen, setToListen] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(toListen))
  }, [toListen])

  function addToListen(musicianItem) {
      setToListen(currentToListen => {
        return[
          ...currentToListen,
          {id: crypto.randomUUID(), title: musicianItem, completed: false}
        
        ]
      })
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
      <MusicianListForm onSubmit={addToListen} />  
      <h2 className="header">My List</h2>
      <MusicianList toListen={toListen} toggleToListen={toggleToListen} deleteToListen={deleteToListen} />

    </>

  )
  
}