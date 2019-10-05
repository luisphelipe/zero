import styled from "styled-components";

export default styled.button`
  box-sizing: border-box;
  width: 80%;
  padding: 0.5rem 0;
  font-size: 1.3rem;
  text-align: center;

  color: ${({ theme }) => theme.color.secondary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  background-color: inherit;

  :hover {
    cursor: pointer;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.primary};
  }
`;
