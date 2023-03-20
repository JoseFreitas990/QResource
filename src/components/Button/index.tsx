import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  label: string;
  secondary?: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, secondary } = props;

  if (secondary) {
    return (
      <TouchableOpacity style={styles.buttonContainerSecondary}>
        <Text style={styles.textSecondary}>{label}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
