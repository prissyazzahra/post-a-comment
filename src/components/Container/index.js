import { ContainerWrapper } from "./style";

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  );
}

export default Container;
