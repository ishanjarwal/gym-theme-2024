import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Standard = () => {

    return (
        <div>
            <SideBar />
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Standard
