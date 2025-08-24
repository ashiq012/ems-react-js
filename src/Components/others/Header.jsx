
function Header(props) {
  
  const handleLogin = () => {
    localStorage.setItem('loggedInUser','');
    props.changeUser('')
  }
  return (
    <div className='flex justify-between items-end '>
        <h1 className='text-xl sm:text-2xl font-semibold'>Hello <br /><span className='text-2xl sm:text-4xl font-semibold'>UserName 🖐</span></h1>
        <button 
        className='sm:text-xl bg-red-500 sm:px-5 sm-py-3 px-3.5 py-2 rounded-md hover:bg-red-600 cursor-pointer '
        onClick={handleLogin}
        >Log Out</button>
    </div>
  )
}

export default Header