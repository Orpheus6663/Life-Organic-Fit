import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../constants/colors';

type ButtonProps = { children: ReactNode; onPress?: () => void; disabled?: boolean };

export function Button({ children, onPress, disabled = false }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ hovered, pressed }) => [
        styles.button,
        hovered && !disabled && styles.hovered,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { 
    alignItems: 'center', 
    backgroundColor: colors.primary, 
    borderRadius: 13, 
    justifyContent: 'center', 
    minHeight: 54 
  },

  hovered: { 
    backgroundColor: colors.primaryDark, 
    transform: [{ scale: 1.01 }]
  },

  pressed: { 
    backgroundColor: colors.primaryDark, 
    transform: [{ scale: 0.99 }] 
  },

  disabled: {
     opacity: 0.6
 },
 
  text: { 
  color: colors.white, 
  fontSize: 16, 
  fontWeight: '700'
 },
});
