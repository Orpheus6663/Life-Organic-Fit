import { Stack } from 'expo-router'; // Componente de navegação em pilha do expo-router.

// Layout raiz do app: define quais grupos de telas existem e esconde o cabeçalho
// automático do expo-router em todos eles (cada tela já cuida da própria aparência).
//
// IMPORTANTE: "auth/login" e "auth/cadastro" precisam ficar FORA do grupo "(tabs)".
// Se ficarem dentro de app/(tabs)/auth/..., a barra de navegação de baixo (Tabs)
// aparece nelas também, porque ela é aplicada a tudo que está dentro da pasta (tabs).
export default function RootLayout() {
  return (
    <Stack
      initialRouteName="auth/login" // Primeira tela ao abrir o app.
      screenOptions={{ headerShown: false }} // Esconde o header padrão em todas as telas.
    >
      <Stack.Screen name="auth/login" /> {/* Tela de login, fora da barra de abas. */}
      <Stack.Screen name="auth/cadastro" /> {/* Tela de cadastro, fora da barra de abas. */}
      <Stack.Screen name="(tabs)" /> {/* Grupo com a barra de navegação (Home, Água, etc.). */}
    </Stack>
  );
}
