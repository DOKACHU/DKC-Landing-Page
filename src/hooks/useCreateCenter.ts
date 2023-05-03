import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const postCenterAPI = async (Body: any) => {
  const URL = `https://api-dev.mnz-ai.com/entry/center`;
  return await axios.post(URL, Body, {
    //   headers: {
    //     Authorization: `Bearer ${authToken}`,
    //   },
  });
};

export default function useCreateCenter() {
  return useMutation({
    mutationFn: body => postCenterAPI(body),
    onSuccess: async () => {
      console.log("I'm first!");
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });
}
