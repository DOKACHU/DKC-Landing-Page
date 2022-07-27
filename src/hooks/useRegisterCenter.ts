/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation } from '@apollo/client';

export const RegisterCenter = gql`
  mutation RegisterCenter(
    $centerName: String!
    $centerLocation: String!
    $centerAddress: String!
    $centerBizzNumber: String!
    $centerSubject: String!
    $centerProCount: Int!
    $centerDescription: String!
    $centerPhone: String!
    $centerEmail: String!
  ) {
    registerCenter(
      center_name: $centerName
      center_location: $centerLocation
      center_address: $centerAddress
      center_bizzNumber: $centerBizzNumber
      center_subject: $centerSubject
      center_pro_count: $centerProCount
      center_description: $centerDescription
      center_phone: $centerPhone
      center_email: $centerEmail
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
    alert('생성 완료');
  }
};

const useRegisterCenter = () => {
  const [createCenter, { loading, error }] = useMutation(RegisterCenter, {
    onCompleted,
    // refetchQueries: ['SeeCenterInUser'],
  });

  return { createCenter, loading, error };
};

export default useRegisterCenter;
