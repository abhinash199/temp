import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';


function App() {
  const [reels, setReels] = useState([]);
  
  // useEffect(() => {
  //   //  App Component will run ONCE when it loads, and never again
  //   db.collection('reels').onSnapshot(snapshot => (
  //     setReels(snapshot.docs.map(doc => doc.data()))
  //   )) 
  // }, [])
  
  return (
    <div className="app">
    
      <div className="app__videos">
      {/* Container of app__videos(scrollable content) */}
      
      {/* <VideoCard
      url = {"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"}
      />
   
   <VideoCard
      url = {"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}
      />
   
   <VideoCard
      url = {"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"}
      />
    */}
   <ImageCard/>
   {/* <VideoCard/> */}
 
      </div>    
    </div>
  );
}

export default App;