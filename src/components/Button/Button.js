import "./Button.css"
function Button({icon_btn}) {
  return (
    <img src={icon_btn} className="icon-img"/>
  )
}
function ButtonBlur({icon_btn}) {
  return (
    <img src={icon_btn} className="icon-img-blur"/>
  )
}

export default Button;
export {ButtonBlur};