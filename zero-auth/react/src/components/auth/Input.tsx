import styled from "styled-components";

export default styled.input`
  margin-bottom: 1rem;
  box-sizing: border-box;
  width: 80%;

  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  background-color: inherit;

  font-size: 1.3rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.primary};
  }
`;
