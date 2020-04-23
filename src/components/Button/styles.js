import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

const options = {
  fill: css`
    background-color: ${colors.primary.light};
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid ${colors.primary.base};
  `,
};

export const Container = styled(RectButton)`
  ${(props) => options[props.variation]}
  height: 46px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) =>
    props.variation === 'outline' ? colors.primary.base : '#fff'};
  font-weight: bold;
  font-size: 16px;
`;

export const MyIcon = styled(Icon).attrs((props) => ({
  color: props.variation === 'fill' ? '#fff' : colors.primary.base,
}))`
  margin-right: 10px;
`;
