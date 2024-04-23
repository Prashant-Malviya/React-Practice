import axios from "axios";
import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import { BallTriangle } from "react-loader-spinner";

function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);


  function handleClick(event){
    console.log("event------>", event.target.innerText);
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
        setShowDropDown(false);
    }
  }

  console.log("->>>>>>>>>>>>>>> ",users,filteredUsers);

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/users");

      const responseData = response?.data?.users;

    //   console.log(responseData?.data?.users);

      if (responseData) {
        setUsers(responseData.map((userItem) => userItem.firstName));
        setLoading(false);     
        setError(null);
      }
    } catch (error) {
      console.log(error.message);
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  },[]);

//   console.log("users----",users);



  return (
    <div className="flex flex-col justify-center items-center relative top-20">
    <h1 className="relative bottom-4 text-3xl font-bold text-orange-600">Search Here...</h1>

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
      /> : <input
        // type="text"
        name="search-users"
        placeholder="Search Here..."
        value={searchParam}
        onChange={handleChange}
        className="border-4 border-solid w-52 shadow-lg"
      />
    }


      {

        showDropDown && <Suggestions data={filteredUsers} handleClick={handleClick} />
      }


    </div>
  );
}

export default SearchAutoComplete;
