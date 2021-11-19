import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: rgba(0, 11, 9, 0.53);
  margin: 10px;
  border-radius: 45px;
  padding: 20px;
  height: 180px;
`;

export const ChildContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const Button = styled.View`
  border-radius: 50px;
  width: 55px;
  height: 55px;
  background-color: #eafffb;
  margin: 5px 5px;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
  margin: auto;
`;

export const ParentContainer = styled.View`
  height: 100%;
  flex: 1;
  flex-direction: row;
`;