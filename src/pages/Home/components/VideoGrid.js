import React from "react";
import { Link } from "react-router-dom";
import { getAllSuggestedVideos } from "../../../data";

const VideoGrid = () => {
    const videos = getAllSuggestedVideos();

    return (
        <div className="container-fluid d-flex flex-column overflow-y-scroll" style={{ height: '100vh' }}>
            <div className="d-flex flex-row w-100 position-sticky top-4 bg-light">
                <div>All</div>
                <div>3D Printing</div>
            </div>
            <div className="row p-1 overflow-y-scroll mt-4">
                {
                    videos.map((item, index) => (
                            <div className="col-lg-6 col-xl-4 p-3">
                            <div className="justify-content-center d-flex flex-column">
                                <Link to={`/video/${item.id}`}>
                                    <img src={item.thumbnails.medium.url} alt="thumbnail" className="w-100 rounded-3" style={{ aspectRatio: '16/9' }} />
                                </Link>
                                <div className="d-flex flex-column pt-3">
                                    <div className="d-flex flex-row">
                                        <img src={item.channelThumbnail} alt="home" className='mx-3 my-1 rounded-circle object-fit-contain' width={40} height={40} />
                                        <div className="d-flex flex-column">
                                            <div className="fw-bold">{item.title}</div>
                                            <div>{item.channelName}</div>
                                            <div className="d-flex flex-row">
                                                <div>{item.views} • {`${item.uploadedAt}`}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default VideoGrid;