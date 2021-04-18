import { Background, ModalCard } from "./style";
import Button from "../Button";

const Modal = ({ children, header, onCancel, onSubmit }) => {
  return (
    <Background>
      <ModalCard>
        <h2>{header}</h2>
        {children}
        <div className="buttons">
          <Button size="20%" type="border" onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button size="20%" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </ModalCard>
    </Background>
  );
}

export default Modal;