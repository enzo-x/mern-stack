
import { useNavigate } from 'react-router-dom';
import "./navbar.css"

function NavBar() {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/login')

  }

  function createPost(){
    navigate('/create-post')
  }

  function showPost(){
    navigate('/1')
  }
  return (
    <>
    <div className='navbar-section'>
      <h1>My Blog</h1>
      <div onClick={createPost}>Create Posts</div>
      <div onClick={showPost}>Show post</div>
      <div onClick={logout}>Logout</div>
    </div>
    </>
  );
}

export default NavBar;