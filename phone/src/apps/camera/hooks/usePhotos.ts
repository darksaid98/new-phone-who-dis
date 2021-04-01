import { useRecoilValue } from 'recoil';
import { photoState } from './state';

export const usePhotos = () => {
  return useRecoilValue(photoState.photos);
};
