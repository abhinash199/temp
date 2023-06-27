import React, { useRef, useState,useEffect} from "react";
import "./VideoCard.css";
import ImageFooter from "./ImageFooter";
import  {Waypoint}  from "react-waypoint";
import {debounce} from "lodash";
function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

//   const onVideoPress = () => {
//     if (isVideoPlaying) {
//       //stop
//       videoRef.current.pause();
//       setIsVideoPlaying(false);
//     } else {
//       //play
//       videoRef.current.play();
//       setIsVideoPlaying(true);
//     }
//   };


  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 200))

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const startVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  }

  const pauseVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  }

  const handleScroll = (e) => {
    if (playing) {
      pauseVideo();
    }
  }

  const handleVideoPress = () => {
    if (playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };
  //useState
  //useRef

  const video = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  ];

  return (
    // <div className='videoCard'>
    //    {/* <VideoHeader/> */}
    //    <video
    //     ref = {videoRef}
    //     onClick={onVideoPress}
    //     className ="videoCard__player"
    //     src={url}
    //     alt="IG reel video"
    //     loop
    //     autoPlay={true}
    //     />
    //     {/* <VideoHeader
    //     />
    //     <VideoFooter
    //      channel = {channel}
    //      likes = {likes}
    //      shares = {shares}
    //      avatarSrc = {avatarSrc}
    //      song = {song}
    //     /> */}

    // </div>

   
      video.map((item) => (
        <div className="videoCard">
          <video
            ref={videoRef}
            onClick={handleVideoPress}
            className="videoCard__player"
            src={item}
            alt="IG reel video"
            loop
            autoPlay={true}
          />
          <ImageFooter />
        </div>
      ))
   
  );
}

export default VideoCard;
