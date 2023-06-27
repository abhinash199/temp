import React,{useState} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import BottomAction from "./BottomAction";
function ImageFooter() {
  const [isOpen, setisOpen] = useState(false);
  console.log(isOpen,"isopen");
  const image =  document.getElementsByClassName("videoCard__player")[0];
  const icon =  document.getElementsByClassName("my-icon")[0];
  const app = document.getElementsByClassName("app__videos")[0];
  if(isOpen && image !== undefined && icon !== undefined && app !== undefined){
    image.setAttribute("style","opacity:0.2!important");
    icon.setAttribute("style","opacity:0.2!important");
    app.setAttribute("style","overflow:hidden");
  }else if(image !== undefined && icon !== undefined && app !== undefined){
    image.setAttribute("style","opacity:1!important");
    icon.setAttribute("style","opacity:1!important");
    app.setAttribute("style","overflow:scroll");
  }

  const [index, setIndex] = useState(5)
 
  const about = "Manish Maheshwari is an Indian technology entrepreneur and executive. His technology ventures have focused on building solutions that improve the lives of the masses in emerging markets. He is Co-Founder ofFanory, acreator monetization platfor"
  //const initialPosts = slice(about, 0, index);
  console.log(about.split(' ').slice(0,10).join(' '),"cut");
  console.log(about);
  console.log(about.split(' ').slice(10).join(' '),"show");
const [isMoreClicked, setisMoreClicked] = useState(false)
  
  return (
    <>
      <div className="my-icon">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ margin: "10px 0px" }}>
            <a href={`${window.location.origin}/shivangi-verma/video-call`}>
              <AiOutlineHeart fontSize={22} color={"#fff"} />
            </a>
            <p className="views-count">39.k</p>
          </div>

          <div style={{ margin: "10px 0px" }}>
            <a
              href={`${window.location.origin}/shivangi-verma/video-call`}
              style={{ margin: "10px 0px" }}
            >
              <BsShare fontSize={22} color={"#fff"} />
            </a>
            <p className="views-count">39.k</p>
          </div>

          <div style={{ margin: "10px 0px" }}>
            <a
              href={`${window.location.origin}/shivangi-verma/video-call`}
              style={{ margin: "10px 0px" }}
            >
              <FaRegCommentDots fontSize={22} color={"#fff"} />
            </a>
            <p className="views-count">39.k</p>
          </div>

          <div style={{ margin: "10px 0px" }}>
            <a style={{ margin: "10px 0px" }} onClick={()=>setisOpen(!isOpen)} >
              <BiLocationPlus fontSize={22} color={"#fff"} />
            </a>
            <p className="views-count">39.k</p>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-main">
          <div className="profile-img">
            <img
              src={
                "https://d2szg1fmkfepzj.cloudfront.net/p/artistprofile/thumb-1667034051.jpeg"
              }
              alt={""}
            />
          </div>
          <p className="creator-name">Creator Name</p>
          <p className="visit-btn">Visit Profile</p>
        </div>
        <div className="profile-desc-new">
          <p style={{ margin: "0px" }}>
            
          {about.split(' ').slice(0,10).join(' ')+" "}{isMoreClicked ?  about.split(' ').slice(10).join(' ') : ""}<span onClick={()=>setisMoreClicked(!isMoreClicked)}>{isMoreClicked ? "... less":"... more"}</span>
          </p>
          <span>view 10 comments</span>
        </div>
      </div>
       
       {
        isOpen ?   <BottomAction setisOpen={setisOpen} /> :""
       }
        
    </>
  );
}

export default ImageFooter;
