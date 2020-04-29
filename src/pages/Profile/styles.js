import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Content = styled.View`
  padding: 0 20px;
  align-items: center;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Container = styled.View`
  background-color: ${colors.primary.light};
  height: 150px;
  padding-top: 30px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #333;
  line-height: 22px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 15px;
`;

export const Email = styled.Text`
  color: #999;
  font-size: 18px;
`;

export const Image = styled.Image`
  margin-top: 40px;
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

export const Info = styled.View`
  padding: 15px;
  height: 280px;
  justify-content: space-between;

  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
`;
