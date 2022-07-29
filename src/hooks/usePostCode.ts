/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const usePostCode = () => {
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode(current => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
      setOpenPostcode(false);
    },
  };
  return {
    handle,
    openPostcode,
  };
};

export default usePostCode;
