// Importa o React, necessário para criar componentes
import React from 'react';
// Importa o componente de imagem otimizada do Expo
import { Image } from 'expo-image';
// Importa componentes nativos do React Native
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

// Importa um componente de scroll com efeito parallax (cabeçalho animado)
import ParallaxScrollView from '@/components/ParallaxScrollView';
// Componentes personalizados que adaptam o tema (claro/escuro)
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Componente principal da tela de contato
export default function ContactScreen() {
  return (
    // Tela com efeito Parallax no topo
    <ParallaxScrollView
      // Define cor do fundo do cabeçalho para modo claro e escuro
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}

      // Imagem exibida no cabeçalho (logo da loja)
      headerImage={
        <Image
          source={require('@/assets/images/freaky.png')}
          style={styles.Logo}
        />
      }
    >
      {/* Título principal da tela */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Contato Freaky Sneakers</ThemedText>
      </ThemedView>

      {/* Container do formulário */}
      <View style={styles.container}>

        {/* Campo: Nome */}
        <ThemedText style={styles.subtitle}>Nome</ThemedText>
        <TextInput
          placeholder="Seu nome"
          placeholderTextColor="#ddd"
          style={styles.input}
        />

        {/* Campo: E-mail */}
        <ThemedText style={styles.subtitle}>E-mail</ThemedText>
        <TextInput
          placeholder="seu@email.com"
          placeholderTextColor="#ddd"
          keyboardType="email-address" // troca o teclado para formato de e-mail
          autoCapitalize="none" // impede o celular de iniciar com letra maiúscula
          style={styles.input}
        />

        {/* Campo: Mensagem */}
        <ThemedText style={styles.subtitle}>Mensagem</ThemedText>
        <TextInput
          placeholder="Escreva sua mensagem aqui..."
          placeholderTextColor="#ddd"
          multiline // permite várias linhas
          numberOfLines={4}
          style={[styles.input, styles.textArea]} // aplica estilos combinados
        />

        {/* Botão de envio */}
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Enviar</ThemedText>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

// Estilos da tela
const styles = StyleSheet.create({

  // Estilo da logo exibida no cabeçalho
  Logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute', // fixa no canto do cabeçalho
  },

  // Container do título
  titleContainer: {
    padding: 16,
  },

  // Texto do título principal
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  // Subtítulos dos campos do formulário
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFFFFF',
  },

  // Estilos base dos inputs
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // fundo levemente transparente
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    color: '#fff',
    marginTop: 8,
  },

  // Estilo adicional para o campo de texto grande
  textArea: {
    height: 100,
    textAlignVertical: 'top', // texto começa no topo
  },

  // Estilo do botão "Enviar"
  button: {
    backgroundColor: '#363636',
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  // Texto dentro do botão
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7D26CD',
  },

  // Container geral dos inputs
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
});
