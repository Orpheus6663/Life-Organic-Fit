import type { TextInputProps } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../constants/colors';

type InputProps = TextInputProps & { label: string };

export function Input({ label, style, ...props }: InputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.mutedText}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 7 },
  label: { color: colors.text, fontSize: 14, fontWeight: '600' },
  input: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.inputBorder,
    borderRadius: 12,
    borderWidth: 1,
    color: colors.text,
    fontSize: 16,
    height: 52,
    paddingHorizontal: 16,
  },
});
