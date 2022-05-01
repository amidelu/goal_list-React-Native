import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const goalAddHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    style={styles.input} />
                <View style={styles.buttonStyle}>
                    <Button title='CANCEL' color={'red'} onPress={props.onCancel} />
                    <Button title='ADD' onPress={goalAddHandler} />
                </View>
                
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create(
    {
        inputContainer: {
            flex: 1, justifyContent: 'center', alignItems: 'center'
        },
        input: { width: '80%', borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10 },
        buttonStyle: {
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    }
);

export default GoalInput;