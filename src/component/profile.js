import "./profile.css"
import { profileText, imageList } from "./constant"
import babaprofile from "../assets/babamemo/babaprofile.jpeg"
export const Profile = () =>{
   return <div className="profilepage">
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", padding:"10%"}}>
            <img style={{width: "60%",height: "40%", borderRadius: "50%"}}src={babaprofile} alt="baba-profile-image"/>
          </div>
          <div style={{textAlign:"center", fontWeight:"bold"}}>Layak Singh Sharma</div>
          <hr style={{width:"40%"}}></hr>
          <div style={{width:"80%", padding:"10%", textAlign:"center", height:"15rem", overflow:"scroll"}}>{profileText}</div>
          <div style={{textAlign:"center", fontWeight:"bold"}}>His Memories With Family</div>
          <hr style={{width:"40%"}}></hr>
          <div style={{textAlign:"center"}}>
            {imageList.map((image, index) => (
                <img style={{width:"7rem", height:"7rem", padding:"1%", justifyContent:"space-between"}} key={index} src={image} alt={`image-${index}`} />
            ))}
        </div>
         </div>
}