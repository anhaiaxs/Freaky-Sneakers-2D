// Importações dos componentes e hooks necessários
import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

// Componente principal da tela de categorias
export default function HomeScreen() {
  // Hook para navegação entre telas
  const router = useRouter();

  return (
    // ScrollView com efeito parallax no cabeçalho
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        // Logo centralizado no topo com fundo roxo
        <View style={styles.logoContainer}>
          <Image 
            source={require('@/assets/images/freaky.png')}
            style={styles.logo}
          />
        </View>
      }
    >
      {/* Botão "Voltar" posicionado no início do conteúdo */}
      <View style={styles.backCard}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.backIcon}>Voltar</Text>
        </TouchableOpacity>
       
      </View>

      {/* Seção de destaque com o título "Nossas categorias" */}
      <ThemedView style={styles.heroContainer}>
        <Text style={styles.slogan}>Nossas categorias</Text>
      </ThemedView>

      {/* ScrollView horizontal para exibir as categorias lado a lado */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        {/* Lista estática de marcas/categorias com imagem e botão */}
        {[
          { name: 'Nike', img: require('@/assets/images/download (3).png') },
          { name: 'NewBalance', img: require('@/assets/images/download (2).png') },
          { name: 'Puma', img: require('@/assets/images/download (4).png') },
          { name: 'Adidas', img: require('@/assets/images/download (1).png') },
          { name: 'Olympikus', img: require('@/assets/images/download.png') },
          { name: 'Reebok', img: require('@/assets/images/download (5).png') },
          { name: 'Asics', img: require('@/assets/images/download (6).png') },
          { name: 'Converse', img: require('@/assets/images/download (7).png') },
          { name: 'Vans', img: require('@/assets/images/download (8).png') },
          { name: 'Fila', img: require('@/assets/images/download (9).png') },
        ].map((category, index) => (
          // Cada categoria é renderizada como um cartão com imagem e botão
          <View key={index} style={styles.categoryCard}>
            <Image
              source={category.img}
              style={styles.categoryImage}
              contentFit="contain"
            />
            <TouchableOpacity 
              style={styles.categoryButton}
              onPress={() => router.push(`/${category.name.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <Text style={styles.categoryButtonText}>{category.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
}

// Definição dos estilos usados em toda a tela
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
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#7D26CD',
    marginBottom: 20,
  },
  slogan: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 12,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  categoryCard: {
    width: 80,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  categoryButton: {
    backgroundColor: '#7D26CD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
 backButton: {
    backgroundColor: '#7D26CD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
    margin: 16,
  },
  backCard: {
    width: 80,
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 10, 
  },
  backIcon: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
});