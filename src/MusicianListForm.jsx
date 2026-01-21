import { useState } from "react"

export function MusicianListForm({onSubmit}) {
    const [musicianItem, setMusicianItem] = useState("")
    
  function handleSubmit(e) {
    e.preventDefault()
    if (musicianItem.trim() === "") return

    onSubmit(musicianItem)

    setMusicianItem("")
  }


return(
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Musician Name</label>
          <input 
          value={musicianItem} 
          onChange={e => setMusicianItem(e.target.value)} 
          type="text" 
          id="item" 
          />
        </div>
        <button className="btn">Add Musician</button>
      </form>
    )
}