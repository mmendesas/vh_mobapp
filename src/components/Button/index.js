import React from 'react';
import { ActivityIndicator } from 'react-native';
import { string, bool, oneOf } from 'prop-types';

import { Container, Content, Text, MyIcon } from './styles';

export default function Button({
  children,
  loading,
  icon,
  variation,
  ...props
}) {
  return (
    <Container variation={variation} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Content>
          {icon && (
            <MyIcon name={icon} size={28} color="#ccc" variation={variation} />
          )}
          <Text variation={variation}>{children}</Text>
        </Content>
      )}
    </Container>
  );
}

Button.defaultProps = {
  loading: false,
  variation: 'fill',
  icon: null,
};

Button.propTypes = {
  icon: string,
  children: string.isRequired,
  loading: bool,
  variation: oneOf(['fill', 'outline']),
};
