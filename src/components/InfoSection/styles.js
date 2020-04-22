import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 20px 30px;
  flex-direction: row;
  background-color: ${colors.white};
  align-items: center;
`;

export const Content = styled.View`
  margin: 0 20px;
`;

export const Description = styled.Text`
  color: ${colors.text.light};
  line-height: 20px;
  margin-bottom: 15px;
`;

export const Action = styled.Text`
  color: ${colors.primary.base};
  font-weight: bold;
`;
