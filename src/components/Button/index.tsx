import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  label: string;
  secondary?: boolean;
  onPress: () => void;
  style?: any;
}

const Button = (props: ButtonProps) => {
  const { label, secondary, onPress, style } = props;

  if (secondary) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonContainerSecondary, style]}
      >
        <Text style={styles.textSecondary}>{label}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
