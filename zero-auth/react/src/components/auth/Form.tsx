import styled from "styled-components";

export default styled.div`
  width: 400px;
  padding: 2rem 0;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.backgroundColor.secondary};
`;
