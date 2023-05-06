import { useState } from "react";

const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ [name]: value });
  };
  console.log(value);
  return [value, handleChange];
};
export default useForm;
