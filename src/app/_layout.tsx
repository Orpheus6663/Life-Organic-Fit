import { Stack } from 'expo-router'; // Componente de navegação em pilha do expo-router.

// Layout raiz do app: define quais telas existem
// e esconde o cabeçalho automático do expo-router.
export default function RootLayout() {
  return (
    <Stack
      initialRouteName="auth/login" // Primeira tela ao abrir o app.
      screenOptions={{
        headerShown: false, // Esconde o cabeçalho padrão.
      }}
    >
      {/* Tela de login, fora da barra de abas. */}
      <Stack.Screen name="auth/login" />

      {/* Tela de cadastro, fora da barra de abas. */}
      <Stack.Screen name="auth/cadastro" />

      {/* Grupo que contém a navegação inferior. */}
      <Stack.Screen name="tabs" />
    </Stack>
  );
}