import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, rt) => ({
  container: {
    paddingTop: rt.insets.top,
    flex: 1,
    padding: 32
  },
  button: {
    borderRadius: 24,
    padding: 16,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primary
        },
        secondary: {
          backgroundColor: theme.colors.secondary
        }
      }
    }
  },
  buttonPressed: {
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primaryPressed
        },
        secondary: {
          backgroundColor: theme.colors.secondaryPressed
        }
      }
    }
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 64
  }
}));