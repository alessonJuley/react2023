import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
// root layout is the home route in this project
function RootLayout(){
          return <>
                    <MainHeader />
                    <Outlet />
          </>
}

export default RootLayout;