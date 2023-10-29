import React from "react";
import SEARCH from '../../../assets/search.svg';
import YOUTUBE_ICON from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-fluid d-flex justify-content-between position-sticky top-0 bg-white mt-2 pb-2">
            <div className="col">
                <a href="/">
                    <img src={YOUTUBE_ICON} alt="logo" className="h-100 ps-4" width={120} height={30}/>
                </a>
            </div>
            <div className="col">
                <form className="input-group">
                    <input type="text" placeholder="Search" className="w-75 p-2 form-control border-grey" style={{borderTopLeftRadius: 30, borderBottomLeftRadius: 30}}/>
                    <button className="btn btn-light form-control border-grey" style={{borderTopRightRadius: 30, borderBottomRightRadius: 30}}>
                        <img src={SEARCH} alt="search" className="w-100" width={24} height={24}/>
                    </button>
                </form>
            </div>
            <div className="col justify-content-end d-flex pe-3">
                <button className="btn btn-secondary">Sign In</button>
            </div>
        </div>
    )
}

export default Header;