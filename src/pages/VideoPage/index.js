import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getAllSuggestedVideos, getChannelFromId, getVideo } from "../../data";
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike, BiShare } from 'react-icons/bi';

const VideoPage = () => {
    const navigate = useNavigate();
    const videos = getAllSuggestedVideos();
    const onVideoClick = (id) => {
        navigate('/video/' + id);
    }
    const { id } = useParams();
    const video = getVideo(id);
    const channel = getChannelFromId(video.channelId);

    return (
        <div className="container-fluid row">
            <div className="col-lg-8 p-5 col">
                <iframe className="w-100 rounded-3" style={{ aspectRatio: '16/9' }} src={`https://www.youtube.com/embed/${id}?si=pyGwz_fNe9NJl-TY?rel=0&autoplay=1&mute=1`} title="YouTube video player" allow="autoplay; encrypted-media"></iframe>
                <div className="fw-bold p-2">{video.title}</div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <img className="rounded-circle m-1" src={channel.thumbnail} alt="home" width={40} height={40} />
                        <div className="d-flex flex-column">
                            <div className="fw-bold ps-1">{channel.name}</div>
                            <div className="ps-1 pe-1">{`${channel.subscribers} subscribers`}</div>
                        </div>
                        <button className="btn btn-dark ms-3 rounded-pill">Subscribe</button>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="d-flex flex-row">
                            <button className="btn btn-light ms-2 me-2"> <AiOutlineLike /> {video.likes}</button>
                            <button className="btn btn-light ms-2 me-2"><BiDislike /></button>
                        </div>
                        <button className="btn btn-light ms-3"><BiShare /> Share</button>
                    </div>
                </div>
                {/** Description */}
                <div className="mt-3 m-2 bg-light rounded border-dark p-4">
                    <div className="fw-normal">{video.views + ' views • ' + video.uploadedAt + ' ago'}</div>
                    <p>{video.description}</p>
                </div>
                {/** Add commment */}
                <div className="mt-3 m-2 bg-light rounded border-dark p-4">
                    <div className="fw-bold">22,960 Comments</div>
                    <div className="d-flex flex-row align-items-center">
                        <img className="rounded-circle m-1" src={channel.thumbnail} alt="home" width={40} height={40} />
                        <input type="text" placeholder="Add a comment..." className="form-control border-none rounded-pill m-3" />
                    </div>
                </div>
                {/** Comments */}
                <div className="d-flex flex-column">
                    {
                        videos.map((item, index) => (
                            <div className="d-flex flex-row m-3">
                                <img className="rounded-circle m-2" src={channel.thumbnail} alt="home" width={40} height={40} />
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row">
                                        <div className="fw-bold ps-1">Jhon</div>
                                        <div className="ps-1 pe-1 fs-6">1 hour ago</div>
                                    </div>
                                    <div className="ps-1 pe-1">This is a comment</div>
                                    <div className="d-flex flex-row gap-2 m-2">
                                        <button className="btn btn-light rounded-pill"><AiOutlineLike /></button>
                                        <button className="btn btn-light rounded-pill"><BiDislike /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="col-4 d-none d-lg-block">
                {
                    videos.map((item, index) => (
                        <div className="col-lg-6 col-xl-4 w-100 d-flex justify-content-between" onClick={() => onVideoClick(item.id)}>
                            <div className="justify-content-center align-items-center d-flex flex-row">
                                <img src={item.thumbnails.default.url} alt="thumb" className="rounded-2" />
                                <div className="d-flex flex-column p-3">
                                    <div className="d-flex flex-column">
                                        <div className="fw-bold">{item.title}</div>
                                        <div>{item.channelName}</div>
                                        <div className="d-flex flex-row">
                                            <div>{video.views} views • {video.uploadedAt}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default VideoPage;