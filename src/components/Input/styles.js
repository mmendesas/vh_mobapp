import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: ${colors.text.base};
`;
