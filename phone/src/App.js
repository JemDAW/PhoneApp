import PhoneList from "./Components/PhoneList";
import React from "react";
import usePhoneGet from "./hooks/usePhoneGet";

const App = () => {

  const phones = usePhoneGet();

  return (
    <div>
      <PhoneList results={phones}/>
    </div>
  );
}

export default App;
