import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

const UserInput = ({name}) => {
    return (
        <View style={{ marginHorizontal: 24 }}>
            <Text semi >{ name }</Text>
            <TextInput 
                style={{
                  borderBottomWidth: 0.5,
                  height: 48,
                  borderBottomColor: '#737373',
                  marginBottom: 30,
                }}
                onTextChange={(text) => console.log(text)}
            />
        </View>
    
    );
};

export default UserInput;