import { useState } from "react";

export default function useAuth() {
  // Replace this with real auth logic later
  const [user, setUser] = useState({ loggedIn: true }); 
  return user;
}
