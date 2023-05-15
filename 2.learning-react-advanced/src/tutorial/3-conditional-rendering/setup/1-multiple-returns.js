import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user,setUser] = useState("Default User");

  useEffect(async()=>{
     fetch(url)
       .then((resp)=> {
        if(resp.status >= 200 && resp.status <= 300){
          return resp.json();
        }
        else{
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
       })
       .then((user)=>{
        const { login } = user;
        setUser(login);
        setIsLoading(false);
       })
       .catch((error)=> console.log(error)); // This only catches network errors
  },[]);

  if(isLoading){
    return (
      <div>
        <h2>Loading..</h2>
      </div> 
    )
  }

  if(isError){
    return (
      <div>
        <h2>Error..</h2>
      </div> 
    )
  }
 
  //This is the default condition
  return(
    <div>
      <h2>{user}</h2>
    </div>
  )
};

export default MultipleReturns;
