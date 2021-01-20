import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const ComponentsScreen = () => {
    const name = "Dev";

    return (
        <View>
            <Text style={styles.textStyle}>How's it going?</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
