import "./Footer.css";
import Button from "../Button/Button";
import { ButtonBlur } from "../Button/Button";
import VoiceImg from "./Icon_img/voice.png";
import VideoImg from "./Icon_img/video.png";
import CallCut from "./Icon_img/circle.png";
import CastImg from "./Icon_img/cast.png";
import HandImg from "./Icon_img/hand.png"

function Footer() {
  return (
    <div className="footer">
        <div className="left-side">
          <span>7:44 | </span>
          <span>pqr-lmn-yzx</span>
        </div>
        <div className="middle-side">
          <Button icon_btn={VoiceImg}/>
          <Button icon_btn={VideoImg}/>
          <ButtonBlur icon_btn={CastImg}/>
          <ButtonBlur icon_btn={HandImg}/>
          <Button icon_btn={CallCut}/>
        </div>
        <div className="middle-side"></div>
    </div>
  )
}

export default Footer