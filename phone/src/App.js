import PhoneList from "./Components/PhoneList";
import React , { useState , useEffect} from "react";
import usePhoneGet from "./hooks/usePhoneGet";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const phones = usePhoneGet();

  useEffect(() => {
   if(phones.phones){
      if(phones.phones.length > 0){
        setLoading(false);
      }
   }    
  }, [phones]);

  if(!loading){
    return (
      <div>
        <PhoneList results={phones}/>
      </div>
    );
  }else{
    return (
    <div>
      <Loader/>
    </div>
    );
  }
  
}

export default App;
