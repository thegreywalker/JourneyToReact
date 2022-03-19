import { data } from "autoprefixer";
import React from "react";

const UserDetail = () => {
  const [user, setUser] = React.useState([]);

  let cookie = document.cookie;
  data = cookie.split(";");
  let userId = "";
  let token = "";
  data.forEach((val) => {
    if (val.includes("user_id")) {
      userId = val.split("=")[1];
    }
    if (val.includes("token")) {
      token = val.split("=")[1];
    }
  });
  const fetchUserDetails = React.useCallback(async () => {
    const response = await fetch(
      "http://localhost:8000/account/user/" + userId+"/",
      {
        method: "GET",
        headers: {
          Authorization: "Token " + token,
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    let loadedUser = [];

    loadedUser.push({
      user_id: data.id,
      email: data.email,
      first_name: data.first_name,
      address: data.address,
      profile_picture: data.profile_picture

    })
    setUser(loadedUser);
  },[]);
  React.useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  return <React.Fragment>
    <section>
      {user.map(user => {
        return (
          <div key={user.user_id}>
            <img src={user.profile_picture} alt="Profile Picture" />
            <div>

            <p>Email: {user.email}</p>
            <p>First Name: {user.first_name}</p>
            <p>Address: {user.address}</p>
            </div>
          </div>
        )
      })}
    </section>
  </React.Fragment>;
};

export default UserDetail;
