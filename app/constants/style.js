import { Platform } from 'react-native'

export const colors = {
  black: '#000000',
  blue: '#007FFF',
  grey: '#A1A1A1',
  lightGrey: '#f5f5f5',
  orange: '#FFA500',
  placeholderGrey: '#CFCFCF',
  red: '#FF0064',
  white: '#ffffff',
}

export const shadows = {
  basicShadow: {
    ...Platform.select({
      ios: {
        shadowOffset: { height: 2 },
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 1.0,
      },
      android: {
        borderWidth: 0.5,
        borderColor: colors.grey,
      },
    }),
  },
  errorShadow: {
    ...Platform.select({
      ios: {
        shadowOffset: { height: 2 },
        shadowColor: colors.red,
        shadowOpacity: 0.3,
      },
      android: {
        borderWidth: 1,
        borderColor: colors.red,
      },
    }),
  },
}

export const toast = {
  toast: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  toastText: {
    fontFamily: 'Roboto',
    color: colors.white,
  },
}

export const buttons = {
  defaultButton: {
    height: 50,
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 80,
    marginVertical: 30,
    backgroundColor: colors.blue,
  },
  defaultButtonText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: colors.white,
    fontWeight: '500',
  },
}
