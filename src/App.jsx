import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/homepage"
import AddItemPage from "./pages/additempage"
import MyItemsPage from "./pages/myitemspage"


const router = createBrowserRouter (
  [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "additempage",
      element: <AddItemPage/>
    },
    {
      path: "myitemspage",
      element: <MyItemsPage/>
    }
  ]
)

function App () {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App