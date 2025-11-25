// Importações de componentes e hooks necessários para a tela
import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

// Componente principal da tela inicial
export default function HomeScreen() {
  // Estado para controlar qual imagem está ativa no carrossel
  const [currentIndex, setCurrentIndex] = useState(0);
  // Hook de navegação do Expo Router
  const router = useRouter();

  // Lista de imagens estáticas para o carrossel
  const images = [
    require('@/assets/images/1.jpg'),
    require('@/assets/images/2.jpg'),
    require('@/assets/images/3.jpg'),
    require('@/assets/images/4.jpg'),
    require('@/assets/images/5.jpg'),
  ];

  // Função para ir à próxima imagem (com loop circular)
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Função para voltar à imagem anterior (com loop circular)
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Renderização do layout da tela
  return (
    // ScrollView com efeito parallax no cabeçalho
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        // Logo fixo no topo da tela
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/freaky.png')}
            style={styles.logo}
          />
        </View>
      }
    >
      {/* Container principal com fundo temático */}
      <ThemedView style={styles.heroContainer}>
        {/* Carrossel de imagens com botões de navegação */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity onPress={prevImage} style={styles.arrowButtonLeft}>
            <Text style={styles.arrowText}>‹</Text>
          </TouchableOpacity>

          <Image
            source={images[currentIndex]}
            style={styles.carouselImage}
            contentFit="cover"
            transition={300}
          />

          <TouchableOpacity onPress={nextImage} style={styles.arrowButtonRight}>
            <Text style={styles.arrowText}></Text>
          </TouchableOpacity>
        </View>

        {/* Texto descritivo abaixo do carrossel */}
        <Text style={styles.tagline}>Veja nossas categorias.</Text>

        {/* Linha com dois botões de ação lado a lado */}
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => router.push('/categorias')}
          >
            <Text style={styles.ctaText}>Explorar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.ctaButton, styles.loginButton]}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.ctaText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// Definição de todos os estilos usados no componente
const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7D26CD',
    paddingVertical: 20,
    width: '100%',
    height: 200,
  },
  logo: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
  },
  heroContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2e1b3fff',
    marginBottom: 20,
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  carouselImage: {
    width: '60%',
    aspectRatio: 16 / 9, 
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
  },
  arrowButtonLeft: {
    position: 'absolute',
    left: 8,
    top: '50%',
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButtonRight: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 24,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16, // espaçamento entre os botões
  },
  ctaButton: {
    backgroundColor: '#000',
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 30,
  },
  loginButton: {
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});