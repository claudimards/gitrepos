import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;

    ::placeholder {
      color: #bbb;
    }
  }

  button {
    background-color: #ccc;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #bbb;
    }
  }
`;
