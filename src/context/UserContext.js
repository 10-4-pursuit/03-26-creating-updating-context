import { createContext } from "react";

const UserContext = createContext({ name: 'John Doe', age: 30 });

export default UserContext;