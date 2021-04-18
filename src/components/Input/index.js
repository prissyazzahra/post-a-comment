import { Label, InputBox } from "./style";

const Input = ({ label, placeholder, onChange }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputBox onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </>
  );
}

export default Input;