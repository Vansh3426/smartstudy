import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";


const apiUrl = import.meta.env.VITE_API_URL;

function Userinfo() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fullName = user.fullName;
      const primaryEmail = user.primaryEmailAddress?.emailAddress;

      // Send to backend
      fetch(`${apiUrl}/save-user`, {
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

  return null;
}

export default Userinfo;
