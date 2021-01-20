import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Demo App</Text>
            <Button
                onPress={() => navigation.navigate("Components")}
                title="Go to Components Demo"/>
            <Button
                onPress={() => navigation.navigate("List")}
                title="Go to List Demo"/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;