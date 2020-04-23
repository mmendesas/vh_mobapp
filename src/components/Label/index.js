import React, { forwardRef } from 'react';
import { string, oneOfType, object, array } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TText } from './styles';

function Label({ style, icon, children, ...props }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={30} color="#ccc" />}
      <TText {...props} ref={ref}>
        {children}
      </TText>
    </Container>
  );
}

Label.propTypes = {
  icon: string,
  style: oneOfType([object, array]),
  children: string.isRequired,
};

Label.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Label);
