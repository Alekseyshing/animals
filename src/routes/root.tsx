import { Outlet } from "react-router-dom";
import App from "../App";



export default function Root() {
  return (
    <div id="detail">
      <App/>
      <Outlet />
    </div>
  );
}