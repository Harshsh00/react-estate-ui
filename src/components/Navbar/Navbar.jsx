import { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'


function Navbar() {

const[open,setOpen] = useState(false)

    return (
        <>
            <nav >

                <div className="left-side">
                    <Link className='logo'>
                        <img src="logo.png" alt="logo_img" />
                        <span>HS-Estate</span>
                    </Link>

                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About</Link>
                    <Link to={'/'}>Contact</Link>
                    <Link to={'/'}>Agents</Link>
                  
                </div>


                <div className="right-side">
                    <a href="">Sign-In</a>
                    <a href="" className='register'>Sign-Up</a>
                    <div className="menuIcon">
                        <img src="/menu.png" alt="menu-img" onClick={()=>setOpen((prev) => !prev)}/>
                    </div>
                    <div className={open ? "menu active" : "menu"}>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Agents</a>
                        <a href="">Sing In</a>
                        <a href="">Sing up</a>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar