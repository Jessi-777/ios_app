import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/Userinput";

const Signup = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text title bold center color="#333">
                Sign Up
            </Text>

            <UserInput name="NAME" />
            <UserInput name="EMAIL" />
            <UserInput name="PASSWORD" />
        </View>
  
    )
}

export default Signup;