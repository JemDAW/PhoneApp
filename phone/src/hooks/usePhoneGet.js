import { useState, useEffect } from "react";
import axios from "axios";

const usePhoneGet = () => {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/phones")
      .then((response)=> setResults(response.data))
      .catch((error) => console.log(error));
    
  }, []);
  return results;
};

export default usePhoneGet;