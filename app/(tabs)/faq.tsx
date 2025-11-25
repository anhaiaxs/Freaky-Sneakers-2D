// Importa o React, necessário para criar componentes funcionais
import React from 'react';
// Importa o componente de imagem otimizada do Expo
import { Image } from 'expo-image';
// Importa componentes visuais básicos do React Native
import { StyleSheet, View } from 'react-native';

// Importa o componente de Scroll com efeito Parallax no cabeçalho
import ParallaxScrollView from '@/components/ParallaxScrollView';
// Componentes personalizados que se adaptam ao tema claro/escuro
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Tela principal de "Perguntas Frequentes"
export default function HomeScreen() {
  return (
    // Estrutura principal com efeito Parallax
    <ParallaxScrollView
      // Define a cor de fundo do cabeçalho para ambos os temas
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}

      // Imagem no cabeçalho (logo da loja)
      headerImage={
        <View style={styles.image}>
          <Image
            source={require('@/assets/images/freaky.png')}
            style={styles.logo}
          />
        </View>
      }
    >
      {/* Título da página */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Perguntas Frequentes - Freaky Sneakers</ThemedText>
      </ThemedView>

      {/* Container contendo todas as perguntas e respostas */}
      <View style={styles.container}>

        {/* Cada bloco tem um título (pergunta) e um parágrafo (resposta) */}

        <ThemedText style={styles.subtitle}>Produtos são originais?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim! Temos 26 anos no mercado e vendemos só produtos 100% originais.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Posso comprar online e retirar na loja?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Não. Compras online são enviadas só pelos Correios.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Formas de pagamento?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Apenas cartão de crédito online.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Como trocar ou devolver?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Contato por e-mail vendas@freakysneakers.com ou WhatsApp (41) 1234-5678 com motivo e número do pedido.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Troca de compra online na loja?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim, se o produto estiver sem uso, com embalagem e etiquetas.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Como acompanhar o pedido?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Pelo site e notificações por e-mail.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Produto não aparece no site, tem na loja?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Se não está no site, está esgotado no estoque online, mas pode ter em lojas físicas.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Preços no site e lojas são iguais?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim, mesmo preço.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Valor cobrado, mas pedido não atualizado?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Análise de segurança pode levar até 72 horas, valor fica reservado.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Ligação para confirmar dados é segura?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim, é nosso sistema de segurança.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Por que meu pedido foi cancelado?</ThemedText>
        <ThemedText style={[styles.paragraph, styles.bold]}>
          Falha na validação de segurança. Revise os dados e tente novamente.
        </ThemedText>

      </View>
    </ParallaxScrollView>
  );
}

// Estilos visuais da tela
const styles = StyleSheet.create({
  // Container da imagem do cabeçalho
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  // Estilo da logo
  logo: {
    width: 200,
    height: 120,
    resizeMode: 'contain', // garante que a logo não distorça
  },

  // Container do título principal
  titleContainer: {
    padding: 16,
  },

  // Estilo do texto do título
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  // Estilo dos subtítulos (perguntas)
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFFFFF',
  },

  // Estilo das respostas (parágrafos)
  paragraph: {
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
    marginBottom: 16,
  },

  // Estilo extra para o texto em negrito
  bold: {
    fontWeight: '600',
  },

  // Container principal que envolve todas as perguntas
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
  },
});
