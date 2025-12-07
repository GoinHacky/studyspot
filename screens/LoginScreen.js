import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <View style={styles.logo}>
                    <Ionicons name="location" size={30} color={Colors.black} />
                    <View style={styles.star}>
                        <Ionicons name="star" size={15} color={Colors.white} />
                    </View>
                    <View style={styles.bracket} />
                </View>
                <Text style={styles.logoText}>SPACESPOTTER</Text>
            </View>

            {/* Login Heading */}
            <Text style={styles.heading}>LOGIN</Text>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor={Colors.placeholder}
                    value={username}
                    onChangeText={setUsername}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor={Colors.placeholder}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={20}
                            color={Colors.textSecondary}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Remember Me and Forgot Password */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setRememberMe(!rememberMe)}
                >
                    <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                        {rememberMe && (
                            <Ionicons name="checkmark" size={14} color={Colors.white} />
                        )}
                    </View>
                    <Text style={styles.checkboxText}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            {/* Log In Button */}
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.replace('Home')}
            >
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or Sign Up with</Text>
                <View style={styles.dividerLine} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.googleG}>G</Text>
                    <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <View style={styles.facebookIcon}>
                        <Text style={styles.facebookF}>f</Text>
                    </View>
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpLink}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 30,
        paddingTop: 60,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        position: 'relative',
    },
    star: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
    bracket: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderWidth: 3,
        borderColor: Colors.primary,
        borderRightWidth: 0,
        borderTopWidth: 0,
        bottom: 0,
        right: 0,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
        textTransform: 'uppercase',
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        color: Colors.inputText,
        fontSize: 16,
        marginBottom: 15,
    },
    passwordContainer: {
        position: 'relative',
    },
    passwordInput: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingRight: 50,
        color: Colors.inputText,
        fontSize: 16,
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: Colors.textSecondary,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    checkboxText: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
    forgotPassword: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    loginButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.divider,
    },
    dividerText: {
        marginHorizontal: 15,
        color: Colors.textSecondary,
        fontSize: 14,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    socialButton: {
        flex: 1,
        backgroundColor: Colors.gray,
        borderRadius: 10,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    googleG: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 8,
        color: '#4285F4', // Google blue
    },
    facebookIcon: {
        width: 24,
        height: 24,
        backgroundColor: '#1877F2',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    facebookF: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialButtonText: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: '500',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: Colors.black,
        fontSize: 14,
    },
    signUpLink: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: '600',
    },
});

export default LoginScreen;

