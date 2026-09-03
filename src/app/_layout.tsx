import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Define o layout raiz, compartilhado por todas as rotas do aplicativo.
export default function RootLayout() {
  
  // Retorna a barra de status e a configuração de navegação das telas.
  return (
    <>
      {/* Define ícones e textos claros para aparecerem sobre o fundo azul. */}
      <StatusBar style="light" />

      {/* Cria a pilha de telas sem cabeçalho padrão e com transição suave. */}
      <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>

        {/* Registra a rota inicial do aplicativo. */}
        <Stack.Screen name="index" />

        {/* Registra a rota da tela de autenticação. */}
        <Stack.Screen name="auth/login" />

        {/* Registra a rota da tela de criação de conta. */}
        <Stack.Screen name="auth/cadastro" />
        
      </Stack>
    </>
  );
}
