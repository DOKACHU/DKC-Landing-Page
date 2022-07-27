/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation } from '@apollo/client';

export const RegisterProfile = gql`
  mutation RegisterProfile(
    $proName: String!
    $proInfo: String!
    $proSex: String!
    $proLocation: String!
    $proMajor: String!
  ) {
    registerProfile(
      pro_name: $proName
      pro_info: $proInfo
      pro_sex: $proSex
      pro_location: $proLocation
      pro_major: $proMajor
    ) {
      ok
      message
      error
    }
  }
`;

const onCompleted = (data: any) => {
  console.log('data', data);
  if (data) {
    alert('프로필 등록 완료');
  }
};

const useRegisterProfile = () => {
  const [createProfile, { loading, error }] = useMutation(RegisterProfile, {
    onCompleted,
    // refetchQueries: ['SeeCenterInUser'],
  });

  return { createProfile, loading, error };
};

export default useRegisterProfile;
