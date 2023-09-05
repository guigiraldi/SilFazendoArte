import React from "react";

import { KeyboardAvoidingView, SafeAreaView, StatusBar, Platform } from "react-native";

export default function TelaPadrao({children}){
    return <SafeAreaView>
        <StatusBar/>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
}
