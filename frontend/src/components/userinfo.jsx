import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function Userinfo() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fullName = user.fullName;
      const primaryEmail = user.primaryEmailAddress?.emailAddress;

      // Send to backend
      fetch("http://localhost:3000/save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fullName, primaryEmail })
      })
      .then(res => res.json())
      .then(data => console.log("Saved user:", data));
    }
  }, [user]);

  return <h1>Welcome {user?.fullName}</h1>
}

export default Userinfo;
