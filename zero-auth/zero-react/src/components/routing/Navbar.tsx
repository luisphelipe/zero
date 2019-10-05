import styled from "styled-components";

export default styled.ul`
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  widht: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0.5rem;
`;
