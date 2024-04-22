import React from "react";

function User({ user }) {
  const { avatar_url, name, login, followers, following, public_repos,created_at } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user flex flex-col justify-center items-center p-10 ">
      <div className="profile">
        <img src={avatar_url} alt="user" className="w-full rounded-full shadow-lg shadow-orange-200 m-5"/>
      </div>

      <div>
        <a href={`https://github.com/${login} `} target='_blank' className="font-bold text-4xl m-2 text-blue-300">{name || login}</a>
        <p className="font-bold text-2xl m-2 text-blue-300">Joined On {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us',{month:'short'})} ${createdDate.getFullYear()}`}</p>
      </div>


    </div>
  );
}

export default User;
