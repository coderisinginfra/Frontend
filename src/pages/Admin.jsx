import React, { useEffect } from 'react'

const Admin = (props) => {
    useEffect(()=>{
        document.title = props.title
    })
  return (
   <div className="login">
       <div>
       <div style={{margin:"1em 0"}}>
            <h1>Rising Infra Admin Login</h1>
       </div>
       <form action="" method="post">
            <input type='text' placeholder='Enter Username' className='inputs-admin' required/> <br />
            <input type='password' placeholder='Passowrd'  className='inputs-admin' required/> <br />
            <button className='buttons' style={{float:'left',marginLeft:"1em",width:"27em"}}>Submit</button>
        </form>
       </div>
   </div>
  )
}

export default Admin
