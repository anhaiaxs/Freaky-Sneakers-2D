import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ConfirmacaoScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>

      {/* Ícone de sucesso */}
      <Ionicons name="checkmark-circle" size={120} color="#2ecc71" style={{ marginBottom: 20 }} />

      {/* Título */}
      <ThemedText type="title" style={styles.title}>
        Pagamento efetuado!
      </ThemedText>

      {/* Subtítulo */}
      <ThemedText style={styles.subtitle}>
        Seu pedido foi finalizado com sucesso.
      </ThemedText>

      {/* Botão voltar ao início */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/index")}>
        <ThemedText style={styles.buttonText}>Voltar ao início</ThemedText>
      </TouchableOpacity>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.7,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#7D26CD",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
