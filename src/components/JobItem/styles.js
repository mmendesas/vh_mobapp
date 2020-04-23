import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ImageWrapper = styled.View`
  width: 70px;
  height: 70px;
  background-color: #f7f7f7;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

export const Position = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Company = styled.Text`
  margin-bottom: 10px;
`;

export const Country = styled.Text`
  color: #aaa;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Since = styled.Text`
  padding: 3px;
  background-color: rgba(6, 117, 206, 0.6);
  width: 90px;

  color: #fff;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`;

export const IconButton = styled.TouchableOpacity``;
