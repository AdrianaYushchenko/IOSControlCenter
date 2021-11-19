import styled from "styled-components/native";

const flex = `flex: 1;
  flex-direction: column;
  background-color: rgba(0, 11, 9, 0.53)
  border-radius: 45px
  `

export const AppContainer = styled.View`

`;

export const Container = styled.TouchableOpacity`
  ${flex};
  margin: 10px;
  padding: 20px;
  height: 180px;
`;

export const ChildContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
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
  position: relative;
`;

export const FocusWindowContainer = styled.Pressable`
  ${flex};
  height: auto;
  padding: 60px 20px;
  margin: 110px 15px;
`;

export const FocusWindow = styled.Pressable`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  padding: 40px 15px;
`;

export const FocusText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;

export const FocusStatus = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const FocusCell = styled.View`
  flex: 1;
  align-items: center;
`;