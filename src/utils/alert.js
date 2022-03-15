import {Alert} from 'react-native';

export const showAlert = (confirmText, title, message, onPress) =>
  Alert.alert(title, message, [{text: confirmText, onPress: onPress || null}], {
    cancelable: true,
  });

export const showCustomAlert = (
  title,
  message,
  cancelText,
  confirmText,
  onConfirm,
  onCancel,
) =>
  Alert.alert(
    title,
    message,
    [
      {text: cancelText, style: 'cancel', onPress: onCancel || null},
      {text: confirmText, onPress: onConfirm || null},
    ],
    {cancelable: false},
  );
