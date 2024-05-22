import React, {useState} from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import signUpImg from "../assets/images/signup.png";
import emailIcon from "../assets/icons/email.png";
import lockedIcon from "../assets/icons/locked.png";
import phoneIcon from "../assets/icons/phone.png";

export default function Signup({navigation}) {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <Image style={styles.HeaderImg} source={signUpImg} />
            <View style={styles.mainCotainer}>
                <Text style={styles.pageTitle}>
                    Create account
                </Text>
                <Text style={styles.bodyFont}>
                    Quickly create account
                </Text>
                <View style={styles.inputBox}>
                    <Image style={styles.inputIcon} source={emailIcon} />
                    <TextInput style={styles.inputTextBox} placeholder="Email Address" />
                </View>
                <View style={styles.inputBox}>
                    <Image style={styles.inputIcon} source={phoneIcon} />
                    <TextInput style={styles.inputTextBox} placeholder="Phone" />
                </View>
                <View style={styles.inputBox}>
                    <Image style={styles.inputIcon} source={lockedIcon} />
                    <TextInput style={styles.inputTextBox} placeholder="Password" />
                </View>                
                <TouchableOpacity style={styles.btnGreen}>
                    <Text style={{fontSize:22, lineHeight:22, color:"white",}} onPress={() => navigation.navigate('Welcome')}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <View style={styles.accountInfo}>
                    <Text>
                        Already have an account? 
                    </Text>
                    <Pressable>
                        <Text onPress={() => navigation.navigate('Login')}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent:"center",
        backgroundColor:"#F4F5F9",
    },

    HeaderImg: {
        width:"100%",
    },

    mainCotainer: {
        marginTop:50,
        paddingLeft:25,
        paddingRight:25,
        gap:25,
    },

    pageTitle: {
        fontSize:24,
    },

    bodyFont: {
        fontSize:14,
    },

    inputBox: {
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:4,
    },

    inputIcon: {
        marginLeft:25,
    },

    checkBoxItem: {        
        flexDirection:"row",
        gap:10,
        fontSize:14,
        color:"#A3A3A3",
    },

    btnGreen: {
        backgroundColor:"#6CC016",
        borderRadius:4,
        padding:10,
        justifyContent:"space-evenly",
        flexDirection:"row",
        gap:5,
        alignItems:"center",
        color:"white",
    },

    accountInfo: {
        flexDirection:"row",
        justifyContent:"center",
        gap:5,
        fontSize:14,
    },
    inputTextBox: {
        maxWidth:"100%",
        width:"85%",
        padding:15,
    },
});