import { Container } from "@material-ui/core";
//Styles
import { Wrapper } from "./intro.style";

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <Container maxWidth='lg'>
          <h2>Shopping Cart 🛍 </h2>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Intro;
