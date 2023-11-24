import "./profile.css"
import { profileText, imageList, videoList } from "./constant"
import babaprofile from "../assets/babamemo/babaprofile.jpeg"
import {useState} from "react";
export const Profile = () =>{
   const [selectedImage, setSelectedIamge]= useState();

   const handleImageClick = (e, image) =>{
       e.preventDefault();
       setSelectedIamge(image);
   }

   return <div className="profilepage">
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", padding:"10%"}}>
            <img style={{width: "60%",height: "40%", borderRadius: "50%"}}src={babaprofile} alt="baba-profile-image"/>
          </div>
          <div style={{textAlign:"center", fontWeight:"bold"}}>Layak Singh Sharma</div>
          <hr style={{width:"40%"}}></hr>
          <div style={{width:"80%", padding:"10%", textAlign:"center", height:"15rem", overflow:"scroll"}}>{profileText}</div>
          <div style={{textAlign:"center", fontWeight:"bold", marginTop:"10%"}}>His Memories With Family</div>
          <hr style={{width:"40%"}}></hr>
          {
            selectedImage && <div style={{ textAlign:"center"}}><img style={{width: "95%", padding:"1%"}} src={selectedImage} alt="baba-profile-image"/></div>
          }
          <div style={{textAlign:"center", fontWeight:"bold", marginTop:"10%"}}>Photos</div>
          <div style={{textAlign:"center", height:"31rem", overflow:"scroll",marginTop:"5%"}}>
            {imageList.map((image, index) => (
                <img  className="image" style={{width:"7rem", height:"7rem", padding:"1%", justifyContent:"space-between"}} key={index} src={image} alt={`image-${index}`} onClick={(e)=>handleImageClick(e, image)}/>
            ))}
        </div>
        <div style={{textAlign:"center", fontWeight:"bold", marginTop:"10%"}}>Videos</div>
        <div style={{textAlign:"center", height:"31rem", overflow:"scroll", marginTop:"10%"}}>
            {videoList.map((video, index) => (
                <video width="350" height="300" controls >
                <source src={video} type="video/mp4"/>
                </video>
                ))}
        </div>
         </div>
}