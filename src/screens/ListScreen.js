import React from "react";
import {FlatList, StyleSheet, Text} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "Dan", age: 26},
        {name: "David", age: 34},
        {name: "Don", age: 16},
        {name: "Darryl", age: 27},
        {name: "Darren", age: 13},
        {name: "Darnell", age: 84},
        {name: "Dylan", age: 12},
        {name: "Derrick", age: 2},
    ];

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 10
    }
});

export default ListScreen;
