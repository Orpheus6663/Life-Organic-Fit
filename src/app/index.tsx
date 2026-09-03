import { Redirect } from 'expo-router';

// Define a tela inicial acessada ao abrir o app.
export default function Index() {
  // Encaminha diretamente para a tela de login, sem renderizar conteúdo próprio.
  return <Redirect href="/auth/login" />;
}
