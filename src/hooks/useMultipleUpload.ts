/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';

export const useMultipleUpload = () => {
  const fileMuitleInput = useRef<any>(null);
  const [postImages, setPostImages] = useState([]);
  const [rawFiles, setRawFiles] = useState<any>([]);

  const handleDeleteImage = (id: number) => {
    setPostImages(postImages.filter((_, index) => index !== id));
  };

  const handleFileClick = () => {
    fileMuitleInput.current.click();
  };

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageLists = e.target.files;
      // console.log(imageLists[0] as any);
      let imageUrlLists = [...postImages];

      if (imageLists) {
        for (let i = 0; i < imageLists.length; i++) {
          const currentImageUrl = URL.createObjectURL(imageLists[i]) as any;
          imageUrlLists.push(currentImageUrl as never);
          setRawFiles([...rawFiles, imageLists[i]]);
        }

        if (imageUrlLists.length > 5) {
          imageUrlLists = imageUrlLists.slice(0, 5);
        }
        setPostImages(imageUrlLists);
        fileMuitleInput.current.value = '';
      }
    }
  };

  return {
    rawFiles,
    handleFileClick,
    fileMuitleInput,
    postImages,
    handleUploadFile,
    handleDeleteImage,
    setPostImages,
    setRawFiles,
  };
};

export default useMultipleUpload;
