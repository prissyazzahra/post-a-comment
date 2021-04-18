import { Default, Danger, Border } from "./style";

const Button = ({ children, type, size, onClick }) => {
  let button = "";
  switch (type) {
    case "danger":
      button = (<Danger size={size} onClick={() => onClick()}>
        {children}
      </Danger>)
      break;
    case "border":
      button = (<Border size={size} onClick={() => onClick()}>
        {children}
      </Border>)
      break;
    default:
      button = (<Default size={size} onClick={() => onClick()}>
        {children}
      </Default>)
  }
  return button;
}

export default Button;