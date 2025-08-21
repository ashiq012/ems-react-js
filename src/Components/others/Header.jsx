
function Header() {
  
  const handleLogin = () => {
    localStorage.setItem('loggedInUser','');
    window.location.reload();
  }
  return (
    <div className='flex justify-between items-end '>
        <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-4xl font-semibold'>UserName 🖐</span></h1>
        <button 
        className='text-xl bg-red-500 px-5 py-3 rounded-md hover:bg-red-600 cursor-pointer '
        onClick={handleLogin}
        >Log Out</button>
    </div>
  )
}

export default Header