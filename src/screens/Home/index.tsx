import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert, Keyboard } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante Existe", "Já existe um participante na Lista com este nome.")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
        Keyboard.dismiss()
    }

    function handleParticipantRemove(name: string) {

        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
                    onChangeText={setParticipantName}
                    value={participantName}
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