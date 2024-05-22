import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WelcomeImg from "../assets/images/welcome.png";
import GoogleIcon from "../assets/icons/google.jpg";
import userWhite from "../assets/icons/userwhite.png";

export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.HeaderImg} source={WelcomeImg} />
            <View style={styles.mainCotainer}>
                <Text style={styles.pageTitle}>
                    Welcome
                </Text>
                <Text style={styles.bodyFont}>
                    To the World's no. 1 grocery app for Android and iOS. We deliver everything on time.
                </Text>
                <TouchableOpacity style={styles.btnWhite}>
                    <Image source={GoogleIcon} />
                    <Text style={{fontSize:22, lineHeight:22}}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGreen}>
                    <Image source={userWhite} />
                    <Text style={{fontSize:22, lineHeight:22, color:"white",}}>
                        Create an account
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

    btnWhite: {
        backgroundColor:"#fff",
        borderRadius:4,
        padding:10,
        justifyContent:"space-evenly",
        flexDirection:"row",
        gap:5,
        alignItems:"center",
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
});