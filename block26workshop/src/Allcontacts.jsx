
function Allcontacts({contactList, hash}){

    return (
  
        <ul>{
            contactList.map((list) => {
              return(
                <li key={list.id} className={hash === list.id ? 'selected' : ""}><a href={`#${list.id === hash ? "" : list.id}`}>{list.name}</a></li>
              )
            })}</ul>
  
     
    )
  }
  
  export default Allcontacts