import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {

    const participants = ['Maurício', 'Giovana', 'Ilda', 'Marias', 'Samuel', 'Walter', 'Alvalina', 'Nina', 'Carol', 'Cadu', 'Alessandra', 'Nathalya', 'Renan', 'Reinaldo', 'Heitor']

    function handleParticipantAdd() {
        if (participants.includes("Ninaß")) {
            return Alert.alert("Participante Existe", "Já existe um participante na Lista com este nome.")
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log(`Remover 0 Participante ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text >
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2024
            </Text>

            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder='Nome do Participante'
                    placeholderTextColor="#6B6B6B"
                    keyboardType='default'
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nimguém chegou no evento ainda?
                        Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />

        </ View >
    )
}