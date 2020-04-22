import styled from 'styled-components/native';

import colors from '~/styles/colors';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView``;

export const Header = styled.View`
  background-color: ${colors.primary.light};
  height: 230px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) =>
    props.variation === 'primary' ? colors.white : colors.text.base};
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px 0 0 20px;
`;

export const FormInput = styled(Input)`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const FormButton = styled(Button)`
  margin: 20px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})``;
