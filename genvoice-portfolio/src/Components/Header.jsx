import React from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import "../css/Header.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/appSlice';
import { toast } from 'react-toastify';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("currentUser");
        dispatch(setCurrentUser(null));
        navigate("/login");
        toast.success("You have been successfully logout.");
    }

    return (
        <div className='header'>
            <div onClick={() => navigate("/")} className='header-title'>My Portfolio</div>

            <div className='right-side-nav'>
                <IoSettingsSharp onClick={() => navigate("/change-login")} className='setting' />
                <Button onClick={logout} size='small' variant='outlined' sx={{
                    marginRight: "50px", fontSize: "16px", backgroundColor: "#F5EBE0", textTransform: "none", '&:hover': {
                        color: "#F5EBE0",
                        backgroundColor: "#db719a"
                    }
                }} color='info' >Logout</Button>
            </div>
        </div>
    )
}

export default Header;
