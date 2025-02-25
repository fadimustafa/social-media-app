import { useEffect, useState } from "react";

const useLocalstorge = (key, initValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalstorge;
