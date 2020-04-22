import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.white};
  height: 230px;
  width: 300px;
  padding: 30px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #ccc;

  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Type = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.text.light};
`;

export const Position = styled.Text`
  font-size: 20px;
`;

export const Country = styled.Text`
  color: ${colors.text.light};
  font-weight: bold;
  font-size: 16px;
`;
export const City = styled.Text`
  margin-top: 3px;
  color: ${colors.text.light};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;
