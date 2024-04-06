import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './LayOut.scss'

function LayOut() {
    return (
        <div className='layOut'>

            <div className="navbar">
                <Navbar/>
            </div>

            <div className="content">
                <Outlet/>
            </div>

        </div>

    )
}

export default LayOut