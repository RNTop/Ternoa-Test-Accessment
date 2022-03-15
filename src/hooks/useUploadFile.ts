import {useState} from 'react';
import {Platform} from 'react-native';
import {pickFile} from '../utils/file-picker';
import {handlePhotoLibraryPermission} from '../utils/permission';
import {ENV} from '../ternoa-export';
import axios from 'axios';
import {showAlert} from '../utils/alert';

export interface IFile {
  path: string;
  size: number;
  name: string;
  type: string;
}

export interface IUseUploadFile {
  file: IFile | undefined;
  progress: number;
  uploading: boolean;
  pickFileFromLibrary: () => void;
  uploadFile: () => void;
}
export const useUploadFile = (): IUseUploadFile => {
  const [file, setFile] = useState<IFile | undefined>();
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const pickFileFromLibrary = () => {
    handlePhotoLibraryPermission(async () => {
      const response: any = await pickFile();
      setFile(response);
    });
  };

  const uploadFile = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', {
        name: file.name,
        type: file.type,
        uri:
          Platform.OS === 'android'
            ? file.path
            : file.path.replace('file://', ''),
      });
      setProgress(0);
      setUploading(true);
      try {
        await axios.post(`${ENV.API_URL}/add`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
          onUploadProgress: status => {
            setProgress(status.loaded / status.total);
          },
        });
        setTimeout(() => {
          setUploading(false);
          showAlert(
            'OK',
            'File Uploading Success',
            'Your file has been uploaded successfully',
          );
        }, 200);
      } catch (error) {
        showAlert(
          'OK',
          'File Uploading Failed',
          'Something went wrong. Please try again later.',
        );
      }
    }
  };

  return {
    file,
    progress,
    uploading,
    pickFileFromLibrary,
    uploadFile,
  };
};
