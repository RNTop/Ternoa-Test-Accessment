import {Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import {showCustomAlert} from './alert';

export const handlePhotoLibraryPermission = async (func:any) => {
  if (Platform.OS === 'android') {
    func && func();
  } else {
    const status = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (status === RESULTS.GRANTED) {
      func && func();
    } else if (status === RESULTS.DENIED) {
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      const updatedStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (
        updatedStatus === RESULTS.GRANTED ||
        updatedStatus === RESULTS.LIMITED
      ) {
        func && func();
      }
    } else {
      handleOpenSetting(
        '"Ternoa" Would Like to Access Your Camera Roll',
        'This allows BeFamily to share photos from your library and save photos to your camera roll.',
      );
    }
  }
};

const handleOpenSetting = (title:string, message:string) => {
  showCustomAlert(title, message, 'Cancel', 'Enable Library Access', () =>
    openSettings(),
  );
};
