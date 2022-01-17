//components
import Home from './components/home/home'
import Contact from './components/contact/contact'

//icons
import { FaUserAlt } from 'react-icons/fa';

export interface TreeRoutes{
   name:string,
   path:string,
   icon?:JSX.Element,
   componet?: JSX.Element,
   childrens?:TreeRoutes[]
}
const routes: TreeRoutes=
{
    name:"home",
    path:'/',
    componet: <Home />,
    childrens:[
        {
            name: 'Contactame',
            path:'contact',
            icon:<FaUserAlt />,
            componet:<Contact />
        }
    ]
}
export default  routes