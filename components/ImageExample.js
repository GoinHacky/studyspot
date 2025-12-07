import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ImageExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Usage Examples</Text>
      
      {/* LOCAL IMAGES */}
      <Text style={styles.subtitle}>1. Local Images:</Text>
      <Text style={styles.description}>
        Place images in assets/images/ folder and import them:
      </Text>
      
      {/* Example of local image usage */}
      {/* 
      <Image 
        source={require('../assets/images/cafe1.jpg')} 
        style={styles.localImage}
        resizeMode="cover"
      />
      */}
      
      <View style={styles.codeBlock}>
        <Text style={styles.code}>
          {`// Import local image
import cafeImage from '../assets/images/cafe1.jpg';

// Use in component
<Image 
  source={cafeImage} 
  style={styles.image}
  resizeMode="cover"
/>

// Or directly
<Image 
  source={require('../assets/images/cafe1.jpg')} 
  style={styles.image}
/>`}
        </Text>
      </View>

      {/* INTERNET IMAGES */}
      <Text style={styles.subtitle}>2. Internet Images:</Text>
      <Text style={styles.description}>
        Load images from URLs (requires internet connection):
      </Text>
      
      {/* Example of internet image */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop' }}
        style={styles.internetImage}
        resizeMode="cover"
      />
      
      <View style={styles.codeBlock}>
        <Text style={styles.code}>
          {`// Internet image
<Image 
  source={{ uri: 'https://example.com/image.jpg' }}
  style={styles.image}
  resizeMode="cover"
/>`}
        </Text>
      </View>

      {/* PLACEHOLDER/FALLBACK */}
      <Text style={styles.subtitle}>3. With Placeholder:</Text>
      <Text style={styles.description}>
        Handle loading states and errors:
      </Text>
      
      <View style={styles.codeBlock}>
        <Text style={styles.code}>
          {`// With loading placeholder
<Image 
  source={{ uri: 'https://example.com/image.jpg' }}
  style={styles.image}
  defaultSource={require('../assets/images/placeholder.png')}
  onError={() => console.log('Image failed to load')}
  onLoad={() => console.log('Image loaded successfully')}
/>`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  localImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginVertical: 8,
  },
  internetImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginVertical: 8,
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#333',
  },
});

export default ImageExample;
