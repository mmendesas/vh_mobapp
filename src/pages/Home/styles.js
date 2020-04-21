import styled from 'styled-components/native';

import colors from '~/styles/colors';
import Input from '~/components/Input';

export const Container = styled.View``;

export const Header = styled.View`
  background-color: ${colors.primary.light};
  height: 230px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
