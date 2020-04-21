import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View``;

export const Header = styled.View`
  background-color: ${colors.primary.light};
  height: 250px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
`;
