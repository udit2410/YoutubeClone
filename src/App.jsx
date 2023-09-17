
import Body from "./Component/Body"
import Header from "./Component/Header"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from "./utility/Store"
import MainContainer from "./Component/MainContainer"
import VideoPlay from "./Component/VideoPlay"
function App() {
  
     const appRouter=createBrowserRouter([
      {
        path:"/",
        element:<Body></Body>,
        children:[
          {
                path:"/",
                element:<MainContainer></MainContainer>,
          },
          {
            path:"/video",
            element:<VideoPlay></VideoPlay>,
      }
        ]
      }
     ])



  return (
    <Provider store={appStore}>
    <>
             
          <Header></Header>
          <RouterProvider router={appRouter}></RouterProvider>
            
    </>
    </Provider>
  )
}

export default App
