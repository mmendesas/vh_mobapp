import React from 'react';
import { string } from 'prop-types';

import { Container, Label, Text } from './styles';

export default function LabelText({ label, text }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Text> {text} </Text>
    </Container>
  );
}

LabelText.defaultProps = {
  label: '',
  text: '',
};

LabelText.propTypes = {
  label: string,
  text: string,
};
