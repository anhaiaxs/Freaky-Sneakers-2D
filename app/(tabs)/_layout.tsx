import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Página Inicial',
          tabBarIcon: ({ color }) => <IconSymbol size={18} name="home" color="pink" />,
        }}
      />
            <Tabs.Screen
        name="termos"
        options={{
          title: 'Termos de uso',
          tabBarIcon: ({ color }) => <IconSymbol size={18} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contato"
        options={{
          title: 'Contato',
          tabBarIcon: ({ color }) => <AntDesign name="contacts" size={18} color="gray" />,
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: 'Perguntas Frequentes',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="frequently-asked-questions" size={18} color="gray" />,
        }}
      />
        <Tabs.Screen
        name="cadastro"
        options={{
          title: 'Cadastro',
          tabBarIcon: ({ color }) => <FontAwesome5 name="registered" size={18} color="gray" />,
        }}
      />
        <Tabs.Screen
        name="sobrenos"
        options={{
          title: 'Sobre nós',
          tabBarIcon: ({ color }) => <FontAwesome5 name="readme" size={18} color="gray" />,
        }}
      />
        <Tabs.Screen
        name="categorias"
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color }) => <MaterialIcons name="category" size={18} color="gray" />,
        }}
      />
        <Tabs.Screen
        name="nike"
        options={{
          title: 'Nike',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shoe-sneaker" size={18} color="gray" />,
        }}
      />
          <Tabs.Screen
        name="puma"
        options={{
          title: 'Puma',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shoe-sneaker" size={18} color="gray" />,
        }}
      />
          <Tabs.Screen
        name="adidas"
        options={{
          title: 'Adidas',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shoe-sneaker" size={18} color="gray" />,
        }}
      />
         <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <Entypo name="login" size={18} color="gray" />,
        }}
      />
            <Tabs.Screen
        name="painelcliente"
        options={{
          title: 'Painel do Cliente',
          tabBarIcon: ({ color }) => <FontAwesome name="dashcube" size={18} color="gray" />,
        }}
      />
                 <Tabs.Screen
        name="informaçãoes"
        options={{
          title: 'Informações',
          tabBarIcon: ({ color }) => <Ionicons name="information" size={18} color="gray" />,
        }}
      />
                     <Tabs.Screen
        name="politicaprivacidade"
        options={{
          title: 'Política de Privacidade',
          tabBarIcon: ({ color }) => <MaterialIcons name="policy" size={18} color="gray" />,
        }}
      />
              <Tabs.Screen
        name="Vans"
        options={{
          title: 'Vans',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shoe-sneaker" size={18} color="gray" />,
        }}
      />
                    <Tabs.Screen
        name="fila"
        options={{
          title: 'Fila',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shoe-sneaker" size={18} color="gray" />,
        }}
      />
                          <Tabs.Screen
        name="Asics"
        options={{
          title: 'Asics',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shoe-sneaker" size={18} color="gray" />,
        }}
      />
    </Tabs>
  );
}
