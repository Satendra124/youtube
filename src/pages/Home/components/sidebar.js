import React from 'react';
import HOME from '../../../assets/home.svg';
import SUBSCRIPTION from '../../../assets/subscription.svg';
import YOU_NEXT from '../../../assets/you-next.svg';
import YOUR_CHANNEL from '../../../assets/your-channel.svg';
import LIKE from '../../../assets/like.svg';
import { getAllSubscribedChannels } from '../../../data';

const Sidebar = () => {
    const subscriptions  = getAllSubscribedChannels();
    return (
        <div className='overflow-y-scroll left-0 top-4' style={{ width: '270px', height: '100vh'}}>
        <div className='d-flex flex-column pt-4'>
            <div className='pt-1'>
                <div className='sidebar-button'>
                    <img src={HOME} alt="home" className='px-3 py-1' />
                    <span>Home</span>
                </div>
                <div className='sidebar-button'>
                    <img src={SUBSCRIPTION} alt='subscription' className='px-3 py-1' />
                    Subscriptions
                </div>
            </div>
            {/** Divider */}
            <hr className='hr mx-3 me-4'></hr>
            <div className='w-100 pt-1'>
                <div className='sidebar-button'>
                    <span className='ps-3 py-1'>You</span>
                    <img src={YOU_NEXT} alt='you-next' />
                </div>
                <div className='sidebar-button my-1'>
                    <img src={YOUR_CHANNEL} alt="home" className='mx-3 py-1' width={24}/>
                    Your Channel
                </div>
                <div className='sidebar-button'>
                    <img src={LIKE} alt='subscription' className='mx-3 py-1' width={24}/>
                    Liked videos
                </div>
            </div>
            <hr className='hr mx-3 me-4'></hr>
            <div className='w-100 pt-1'>
                <div className='w-100 ps-3 font-weight-bold sidebar-button vertical-align-center'>
                    Subscriptions
                </div>
                {
                    subscriptions.map((item, index) => (
                        <div className='w-100 d-flex flex-row sidebar-button'>
                            <img src={item.thumbnail} alt="home" className='px-3 py-1 w-25 rounded-circle' />
                            {item.name}
                        </div>
                    ))
                }
            </div>
            <hr className='hr mx-3 me-4'></hr>
            <div className='w-100 pt-1 pb-5 ps-3'>
                © 2023 Google LLC
            </div>
        </div>
        </div>
    );
};

export default Sidebar;
