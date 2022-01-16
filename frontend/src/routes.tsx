import Home from './components/home/home'
interface TreeRoutes{
   name:string,
   path:string,
   componet: JSX.Element;
}
const routes: TreeRoutes[]=[
{
    name:"home",
    path:'/',
    componet: <Home />,
}
]
export default  routes