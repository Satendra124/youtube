import React from "react";
import Sidebar from "./components/sidebar";
import VideoGrid from "./components/VideoGrid";
import './components/styles.css';

const HomePage = () => {
    return (
        <div className="d-flex flex-row">
            <Sidebar />
            <VideoGrid />
        </div>
    )
}

export default HomePage;