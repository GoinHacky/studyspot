import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: Colors.inputText,
    fontSize: 16,
    marginBottom: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
  },
});



