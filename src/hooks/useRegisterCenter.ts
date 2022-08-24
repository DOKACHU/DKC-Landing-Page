/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
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
    alert('병원 등록 완료');
  }
};

const useRegisterCenter = () => {
  const [tags, setTags] = useState<any>([]);
  const tagsRef = useRef<any>(null);
  const [createCenter, { loading, error }] = useMutation(RegisterCenter, {
    onCompleted,
  });

  const handleClick = (e: any) => {
    const { current } = tagsRef;
    console.log(current.value);
  };

  const handleTags = (e: any) => {
    const { value } = e.target;
    if (e.key === 'Enter') {
      setTags([...tags, value]);
    }
  };

  console.log('tags', tags);

  return { createCenter, loading, error, handleTags, tags, tagsRef, handleClick };
};

export default useRegisterCenter;
