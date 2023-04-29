import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Header({ setUser }) {

  const user = useContext(AuthContext)

  function logout() {
    setUser(null);
    localStorage.removeItem('user')
  }

  return (
    <div>
      {user ? <button className='btn' type="button" onClick={logout}>logout</button> : null}
    </div>
  )
}

export default Header;