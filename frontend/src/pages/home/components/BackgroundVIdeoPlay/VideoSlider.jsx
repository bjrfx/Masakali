import React from 'react';
import logoclove from '../../../../assets/images/masakali.png';
import BGvideoMp4 from '../../../../assets/Masakali_compressed.mp4';
import BGvideoMov from '../../../../assets/Masakali_mov.mov';
import { Link } from 'react-router-dom';

const VideoSlider = () => {
    return (
        <>
            <div className="Modern-Slider">
                <div className="item">
                    <div className="img-fill">
                        <video title="1" id="bgvid" className="bgsty" autoPlay={true} loop={true} muted={true} playsInline={true}>
                            <source src={BGvideoMp4} type="video/mp4" />
                            <source src={BGvideoMov} type="video/mov" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="info">
                            <div className="dit" >
                                <div className="pulse">
                                    <Link>
                                        <img src={logoclove} className="img22sty" style={{ filter: 'none', width: '20rem' }} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoSlider;