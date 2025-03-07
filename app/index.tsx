import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles/styles';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button variant="primary" />
      </View>
      <Link href="/two-pressable" asChild><Text>Go to screen with two Pressable</Text></Link>
    </View>
  )
}

const Button = ({ variant }: { variant: 'primary' | 'secondary' }) => {
  styles.useVariants({ variant })

  const $styles = ({ pressed }: { hovered: boolean, pressed: boolean }) => {
    if (pressed) {
      return [styles.button, styles.buttonPressed]
    }
    return styles.button
  };

  return (
    <Pressable style={$styles}>
      <Text>Button</Text>
    </Pressable>
  )
}
export default Index;

