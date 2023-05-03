/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
// import { gql, useMutation } from '@apollo/client';
// import { gql, useMutation } from 'urql';

interface ImageProps {
  imagePreviewUrl?: any;
  imageBlob?: any;
}

// api
// const UploadFileDocument = gql`
//   mutation fileUpload($file: Upload!) {
//     fileUpload(file: $file) {
//       ETag
//       Location
//       Key
//       Bucket
//     }
//   }
// `;

const useUploadImage = () => {
  const imageInit = {
    imagePreviewUrl: '',
    imageBlob: null,
  };

  const onCompleted = (data: any) => {
    console.log('data', data);
    if (data) {
      alert('프로필 업로드완료');
    }
  };

  const [loadedProfileImage, setLoadedProfileImage] = useState<ImageProps>(imageInit);
  const [loadedBusinessImage, setLoadedBusinessImage] = useState<ImageProps>(imageInit);

  // s3 업로드
  // const [uploadFile, { loading }] = useMutation(UploadFileDocument, {
  //   onCompleted,
  // });

  // const [result, uploadFile] = useMutation(UploadFileDocument);

  const reader = new FileReader();

  //
  const handleProfileImageChange = async (e: any) => {
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

  const handleBusinessImageChange = async (e: any) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLoadedBusinessImage({
          ...loadedBusinessImage,
          imagePreviewUrl: reader.result,
          imageBlob: file,
        });
        e.target.value = '';
      };
    }
  };

  const handleRemove = () => {
    setLoadedProfileImage(imageInit);
    setLoadedBusinessImage(imageInit);
  };

  // s3 upload
  const handleUpload = async () => {
    const file = loadedProfileImage.imageBlob;
    console.log('file', file);
    // const result = await uploadFile({ file });
  };

  const handleBusinessUpload = async () => {
    const file = loadedBusinessImage.imageBlob;
    console.log('file', file);
    // const result = await uploadFile({ file });
  };

  return {
    loadedProfileImage,
    handleProfileImageChange,
    handleUpload,

    loadedBusinessImage,
    handleBusinessImageChange,
    handleBusinessUpload,

    handleRemove,
  };
};
export default useUploadImage;
