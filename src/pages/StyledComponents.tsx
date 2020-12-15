import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  border-radius: 0.15rem;
  width: 160px;
  height: 60px;
  margin: 20vh auto;
  color: white;
  background: linear-gradient(#f1da36 0%, transparent 99%);
`;

export const LoginCard = styled.div`
  width: 30%;
  height: 400px;
  display: flex;
  text-align: center;
  align-content: center;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  color: white;
  background: linear-gradient(to bottom right, #46494d 13%, transparent 90%);
  transition: 0.3s;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
