/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';

const useRegisterCenter = () => {
  const [tags, setTags] = useState<any>([]);

  const tagsRef = useRef<any>(null);

  const handleClick = () => {
    const { current } = tagsRef;
    console.log({ current });
    if (current.value !== '') {
      setTags([...tags, current.value]);
      current.value = '';
    }
  };

  return { tags, tagsRef, handleClick };
};

export default useRegisterCenter;
