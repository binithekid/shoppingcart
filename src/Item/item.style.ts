import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  font-family: "Avenir";

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 240px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: "Avenir";
    padding: 1rem;
    height: 100%;
    cursor: pointer;
  }

  div p {
    font-size: 0.8em;
  }

  div h3 {
    font-size: 1em;
  }
`;
