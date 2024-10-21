import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/appSlice';
import Header from '../Components/Header';
import About from '../Components/About';
import Footer from '../Components/Footer';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const result = localStorage.getItem("currentUser");
        if (result) {
            const currentUser = JSON.parse(result);
            dispatch(setCurrentUser(currentUser));
        }
    })


    return (
        <div>
            <Header />
            <About />
            <Footer />
        </div>
    )
}

export default Home;
