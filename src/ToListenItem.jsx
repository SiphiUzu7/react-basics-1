
export function ToListenItem({completed, id, title, toggleToListen, deleteToListen}) {
    return(
        <li>
              <label>
                <input type="checkbox" 
                checked={completed} 
                onChange={e => toggleToListen(id, e.target.checked)}
                />
                {title}
              </label>
              <button 
              onClick={() => deleteToListen(id)} 
              className="btn btn-danger">Delete</button>
            </li>
    )

}