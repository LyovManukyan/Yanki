import { useRoutes } from "react-router";
import Leout from './Leout';
import HomeIndex from './main/Home/index.js';
import Catalog from './main/Catalog/index.js';
import Contact from './main/Contact';
import Blog from './main/Blog';
import Goods from './main/Goods';
import Clots from './main/Clots';
import Wears from "./main/Catalog/Wears";
import WearsItem from "./main/Catalog/WearsItem";
import AboutUs from "./main/AboutUs";
import BonusSystem from "./main/ForFooterNav/BonusSystem";
import NotFoundPage from "./main/NotFoundPage";


export default function Router() {
  let element = useRoutes([
    {
      element: <Leout/>,
      children: [
        { path: "/", element: <HomeIndex/> },
        { path: "catalog", element: <Catalog />},
        { path:"catalog/:name",element: <Wears/>},
        { path:"catalog/:name/:id",element: <WearsItem/>},
        { path: "contact", element: <Contact /> },
        { path: "blog", element: <Blog />,
         children: [
        { path: "goods", element: <Goods /> },
        { path: "clots", element: <Clots /> }
      ] },
        { path: "bonusSystem", element: <BonusSystem/> },
        { path: "aboutUs", element: <AboutUs /> },
        { path:'*',element:<NotFoundPage/>}
      ]
    },
    
  ]);

  return element;
}