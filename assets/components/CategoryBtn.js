import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const CategoryBtn = ({id, type, title, isActive}) => {
    const [active, setActive] = useState(false);

    // const bgColor = type === 'active' ? '#1fcc79' : '#f4f5f7';
    // const textColor = type === 'active' ? '#ffffff' : '#9fa5c0';
    return (
        <TouchableOpacity onPress={() => setActive(!active)} style={{width: 64, height: 48, borderRadius: 32, backgroundColor: active ? '#1fcc79' : '#f4f5f7', justifyContent: 'center', alignItems: 'center'}}>
          <Text key={id} style={{fontSize: 15, lineHeight: 18, fontWeight:'700', color: active ? '#fff' : '#9fa5c0'}}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

});

export default CategoryBtn;