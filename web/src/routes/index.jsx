import { Navigate } from "react-router-dom";
import PrivateMain from "../pages/private/main";

export const createRoutes = (user) => {
    let routes = [
      {
        path: "/",
        children: [
          {
            path: "/",
            element: <PrivateMain />,
          },
          {
            path: "*",
            element: <Navigate to="/" />,
          },
        ],
      },
    ];
     
  
    return routes;
  };