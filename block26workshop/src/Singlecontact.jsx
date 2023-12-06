
function Singlecontact({list}) {
  
  


    return (
     <div className={'contactBox'}>
          <h3>{list.name}</h3>
          <li>Username: {list.username}</li>
          <li>Email: {list.email}</li>
          <li>Phone #: {list.phone}</li>
          <li>Company: {list.company.name}</li>
          <br />
    </div>
    )
  }
  
  export default Singlecontact