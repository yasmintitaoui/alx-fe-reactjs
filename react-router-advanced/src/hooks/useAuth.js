import { useState } from "react";

export default function useAuth() {
  
  const [user, setUser] = useState({ loggedIn: true }); 
  return user;
}
