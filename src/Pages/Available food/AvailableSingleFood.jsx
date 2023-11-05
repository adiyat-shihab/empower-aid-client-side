import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const AvailableSingleFood = () => {
  const params = useParams();
  const { id } = params;
  const { data } = useQuery({
    queryKey: ["single"],
    queryFn: () =>
      axios.get(`${import.meta.env.VITE_LOCAL_HOST}/donation/food/${id}`),
  });
  console.log(data);
  return <></>;
};
