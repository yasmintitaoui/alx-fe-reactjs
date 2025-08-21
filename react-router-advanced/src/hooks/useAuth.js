import { useState } from "react";


export default function useAuth() {
  const [isAuthenticated] = useState(true); // change to false to simulate unauthenticated
  return { isAuthenticated };
}
