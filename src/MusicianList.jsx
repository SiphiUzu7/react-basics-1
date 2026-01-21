import { ToListenItem } from "./ToListenItem";

export function MusicianList({toListen, toggleToListen, deleteToListen}) {
    return(
        <ul className="list">
        {toListen.length === 0 && "No musicians in your list. Add some!"}
        {toListen.map(toListen => {
          return  (
            <ToListenItem {...toListen} 
            key={toListen.id} 
            toggleToListen={toggleToListen} 
            deleteToListen={deleteToListen}/>
          )
        })}
      </ul>
    )
} 

