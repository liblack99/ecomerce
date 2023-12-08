import { useRoutes } from 'react-router-dom'
import Home from '../Pages/Home'

const Routes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    // { path: '/clothes', element: <Home /> },
    // { path: '/electronics', element: <Home /> },
    // { path: '/furnitures', element: <Home /> },
    // { path: '/toys', element: <Home /> },
    // { path: '/othes', element: <Home /> },
    // { path: '/my-account', element: <MyAccount /> },
    // { path: '/my-order', element: <MyOrder /> },
    // { path: '/my-orders', element: <MyOrders /> },
    // { path: '/my-orders/last', element: <MyOrder /> },
    // { path: '/my-orders/:id', element: <MyOrder /> },
    // { path: '/sign-in', element: <SignIn /> },
    // { path: '/*', element: <NotFound /> },
  ])

  return routes
}
export default Routes