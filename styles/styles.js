import styled from "styled-components/native";

const flexRow = `
  flex: 1;
  flex-direction: row;`;

const flexColumn = `
  flex: 1;
  flex-direction: column;
`;

const button = `
  background-color: #AA978E
  border-radius: 45px
  `

export const AppContainer = styled.View`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  background: #272525;
`;

export const Container = styled.TouchableOpacity`
  ${button};
  ${flexColumn};
  margin: 10px;
  padding: 20px;
  height: 180px;
`;

export const ChildContainer = styled.View`
  ${flexRow};
  justify-content: space-between;
  align-content: center;
`;

export const FocusButton = styled.Pressable`
  border-radius: 50px;
  width: 55px;
  height: 55px;
  margin: 5px 5px;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
  margin: auto;
`;

export const ParentContainer = styled.View`
  height: 100%;
  ${flexRow}
`;

export const FocusWindowContainer = styled.Pressable`
  ${button};
  ${flexColumn};
  height: auto;
  padding: 60px 20px;
  margin: 100px 15px;
`;

export const FocusWindow = styled.Pressable`
  width: 100%;
  height: 100%;
  background: #090707;
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

export const Slider = styled.View`
  ${flexRow};
  width: 48%;
`;

export const SecondSectionContainer = styled.View`
  ${flexRow};
`;

export const ButtonContainer = styled.Pressable`
  padding: 37px 26px;
  margin: auto 10px;
  width: auto;
  border-radius: 25px;
`;

export const Block = styled.View`
  ${flexRow};
  justify-content: space-between;
  width: 1px;
  top: 210px;
  left: 0;
`;

export const FocusMenuButtonContainer = styled.TouchableOpacity`
  top: 310px;
  left: 10px;
  width: 170px;
  height: 85px;
  padding: 10px;
  ${button};
  border-radius: 30px;
  position: relative;
`;

export const FocusMenuButtonInit = styled.View`
  position: absolute;
  padding: 10px;
  margin: auto;
  align-items: center;
  ${flexRow}
`;

export const ThirdSectionContainer = styled.View`
  ${flexRow};
  top: 415px;
`;

export const FourthSectionContainer = styled.View`
  ${flexRow};
  top: 505px;
`;

export const FocusButtonModalContainer = styled.Pressable`
  ${button};
  width: 100%;
  height: 100px;
  margin: auto;
`;

export const FocusButtonModalInit = styled.View`
  padding: 10px;
  margin: auto;
  ${flexRow};
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const FocusButtonModalMore = styled.Pressable`
`;

export const MoreOption = styled.Text`
  background-color: rgba(0, 0, 0, 0.55);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.21);
  padding: 10px 40px;
`;

export const BrightnessModalButtons = styled.Text`
  ${flexRow};
  top: 380px;
  justify-content: center;
  align-items: center;
`;

export const FlashlightContainer = styled.View`
  
`;

export const LightLevel = styled.Pressable`
  width: 160px;
  height: 100px;
  top: 120px;
  border: 1px solid #AA978E;
  margin: auto;
`;

export const MusicPlayer = styled.View`
  margin: 10px 0;
`;

export const MusicPlayerContainer = styled.View`
  ${flexRow};
  justify-content: space-between;
  align-content: center;
  margin-top: 20px;
`;

export const PlayerText = styled.Text`
  padding-bottom: 30px;
  font-size: 20px;
  color: #837B77;
  text-align: center;
  top: 20px;
  font-weight: 700;
`;



