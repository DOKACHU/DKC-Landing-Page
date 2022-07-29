/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface ImageProps {
  imagePreviewUrl?: any;
  imageBlob?: any;
}

const useUploadImage = () => {
  const imageInit = {
    imagePreviewUrl: '',
    imageBlob: null,
  };
  const [loadedProfileImage, setLoadedProfileImage] = useState<ImageProps>(imageInit);

  const reader = new FileReader();
  const handleProfileImageChange = (e: any) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLoadedProfileImage({
          ...loadedProfileImage,
          imagePreviewUrl: reader.result,
          imageBlob: file,
        });
        e.target.value = '';
      };
    }
  };

  const handleRemove = () => {
    setLoadedProfileImage(imageInit);
  };

  return { loadedProfileImage, handleProfileImageChange, handleRemove };
};
export default useUploadImage;
