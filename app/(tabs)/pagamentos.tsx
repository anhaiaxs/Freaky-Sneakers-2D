import { View,  TextInput,  TouchableOpacity, StyleSheet, KeyboardAvoidingView,  Platform, ScrollView, Alert,  Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function PagamentoScreen() {
  const router = useRouter();
  const { produto, marca } = useLocalSearchParams();
  const [selectedPayment, setSelectedPayment] = useState("cartao"); 
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  function handleFinalize() {
    if (selectedPayment === "cartao") {
      if (!cardNumber || !cardName || !cardExpiry || !cardCVV) {
        Alert.alert("Erro", "Por favor, preencha todos os dados do cartão.");
        return;
      }
    }

    //  Navega para a página finalizada (arquivo finalizacao.tsx)
    router.push("/finalizacao");
  }

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity style={styles.voltarButton} onPress={() => router.back()}>
            <Text style={styles.voltarButtonText}>← Voltar</Text>
          </TouchableOpacity>

          <View style={styles.progressContainer}>
            <View style={styles.stepCompleted}>
              <Text style={styles.stepText}>Carrinho</Text>
            </View>
            <View style={styles.stepCompleted}>
              <Text style={styles.stepText}>Entrega</Text>
            </View>
            <View style={styles.stepCurrent}>
              <Text style={styles.stepText}>Pagamento</Text>
            </View>
            <View style={styles.stepUpcoming}>
              <Text style={styles.stepText}>Revisão</Text>
            </View>
          </View>

          <ThemedText style={styles.title}>Pagamento</ThemedText>
          <Text style={styles.label}>Produto: {produto ? produto : "Air Force 1 branco"}</Text>

          <ThemedText style={styles.subtitle}>Escolha o método de pagamento</ThemedText>

          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedPayment === "cartao" && styles.paymentOptionSelected,
            ]}
            onPress={() => setSelectedPayment("cartao")}
          >
            <Text style={[
              styles.paymentOptionText,
              selectedPayment === "cartao" && styles.paymentOptionTextSelected,
            ]}>
              Cartão de Crédito
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedPayment === "pix" && styles.paymentOptionSelected,
            ]}
            onPress={() => setSelectedPayment("pix")}
          >
            <Text style={[
              styles.paymentOptionText,
              selectedPayment === "pix" && styles.paymentOptionTextSelected,
            ]}>
              PIX
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedPayment === "boleto" && styles.paymentOptionSelected,
            ]}
            onPress={() => setSelectedPayment("boleto")}
          >
            <Text style={[
              styles.paymentOptionText,
              selectedPayment === "boleto" && styles.paymentOptionTextSelected,
            ]}>
              Boleto Bancário
            </Text>
          </TouchableOpacity>

          {selectedPayment === "cartao" && (
            <View style={styles.cardForm}>
              <Text style={styles.inputLabel}>Número do Cartão</Text>
              <TextInput
                style={styles.input}
                placeholder="XXXX XXXX XXXX XXXX"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
                maxLength={19}
              />

              <Text style={styles.inputLabel}>Nome no Cartão</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome completo"
                value={cardName}
                onChangeText={setCardName}
              />

              <Text style={styles.inputLabel}>Data de Validade</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/AA"
                value={cardExpiry}
                onChangeText={setCardExpiry}
                maxLength={5}
              />

              <Text style={styles.inputLabel}>CVV</Text>
              <TextInput
                style={styles.input}
                placeholder="XXX"
                keyboardType="numeric"
                value={cardCVV}
                onChangeText={setCardCVV}
                maxLength={3}
                secureTextEntry
              />
            </View>
          )}

          {selectedPayment === "pix" && (
            <View style={styles.pixContainer}>
              <Text style={styles.pixLabel}>Use a chave PIX abaixo:</Text>
              <Text style={styles.pixKey}>freakysneakers@gmail.com</Text>
            </View>
          )}

          {selectedPayment === "boleto" && (
            <View style={styles.boletoContainer}>
              <Text style={styles.boletoText}>
                Após finalizar, o boleto será gerado e enviado para seu e-mail.
              </Text>
            </View>
          )}

          <TouchableOpacity style={styles.finishButton} onPress={handleFinalize}>
            <Text style={styles.finishButtonText}>Finalizar pagamento</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  voltarButton: {
    backgroundColor: "#7D26CD",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  voltarButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  stepCompleted: {
    alignItems: "center",
  },
  stepCurrent: {
    alignItems: "center",
  },
  stepUpcoming: {
    alignItems: "center",
    opacity: 0.4,
  },
  stepText: {
    color: "#7D26CD",
    fontWeight: "bold",
    fontSize: 14,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    color: "#999",
    marginBottom: 20,
    fontSize: 16,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 18,
  },
  paymentOption: {
    backgroundColor: "#121212",
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  paymentOptionSelected: {
    backgroundColor: "#7D26CD",
    borderColor: "#7D26CD",
  },
  paymentOptionText: {
    color: "#fff",
    fontSize: 16,
  },
  paymentOptionTextSelected: {
    fontWeight: "bold",
  },
  cardForm: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  inputLabel: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  pixContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#222",
    borderRadius: 10,
  },
  pixLabel: {
    color: "#aaa",
    marginBottom: 8,
    fontSize: 16,
  },
  pixKey: {
    color: "#7D26CD",
    fontWeight: "bold",
    fontSize: 18,
  },
  boletoContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#222",
    borderRadius: 10,
  },
  boletoText: {
    color: "#aaa",
    fontSize: 16,
  },
  finishButton: {
    marginTop: 30,
    backgroundColor: "#7D26CD",
    paddingVertical: 14,
    borderRadius: 10,
  },
  finishButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});