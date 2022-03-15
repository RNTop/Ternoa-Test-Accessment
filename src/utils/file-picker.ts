import DocumentPicker from 'react-native-document-picker';

export const pickFile = () => {
  return new Promise((resolve, reject) => {
    DocumentPicker.pickSingle({
      type: [DocumentPicker.types.images, DocumentPicker.types.video],
    })
      .then(file => {
        resolve({
          name: file.name,
          size: file.size,
          path: file.uri,
          type: file.type,
        });
      })
      .catch(e => {
        reject(e);
      });
  });
};
