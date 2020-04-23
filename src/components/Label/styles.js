import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  height: 46px;

  border-bottom-width: 1px;
  border-bottom-color: #ccc;

  flex-direction: row;
  align-items: center;
`;

export const TText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: ${colors.text.dark};
`;
