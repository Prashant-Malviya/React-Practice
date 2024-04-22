import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
import { BallTriangle } from "react-loader-spinner";

function GithubProfileFinder() {
  const [userName, setUserName] = useState("Prashant-Malviya");

  const [userData,setUserData] = useState(null);
  const [loading,setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData(){
    try{

   setLoading(true);


    const result = await axios.get(`https://api.github.com/users/${userName}`)

    const resultData = result;

    if(resultData){
        setUserData(resultData?.data)
        setLoading(false);
        setUserName("")
    }

    console.log(resultData);

} catch(error){
    console.error("some error ---------> ",error.message);
    setLoading(false);
}

  }


//   if(loading){
//     return (
        
//     )
//   }

  useEffect(()=>{
    fetchGithubUserData();
  },[])

  return (
    <div className="github-profile-container">
      <div className="input-wrapper flex flex-row justify-center items-center p-2 m-2 ">
        <input
          type="text"
          name="search-by-username"
          placeholder="search github username here....."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          className="border border-2 m-2 px-2 py-2"
        />
        <button className="rounded-md bg-blue-600 text-white font-bold text-xl m-2 px-2 py-1" onClick={handleSubmit}>Search</button>
      </div>

        { 
            loading ? <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass="relative top-72 flex justify-center items-center"
        visible={true}
      /> :
            userData !== null ? <User user={userData} /> : <h1>No Data Availabel</h1>
        }

    </div>
  );
}

export default GithubProfileFinder;
