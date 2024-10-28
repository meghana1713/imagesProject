import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Context.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from  '@tanstack/react-query-devtools'
const queryclient = new QueryClient();
createRoot(document.getElementById('root')).render(
 <AppProvider>
<QueryClientProvider client ={queryclient}>
    <App/>
    <ReactQueryDevtools initialIsOpen={true} />
   </QueryClientProvider>
 </AppProvider>
)

//QueryClient is a functionality used to handle useeffect 
// const queryclient = new QueryClient();
//  is an obect we can use its method and hooks  throught the application by using QueryClientProvider in this object that data will be catched that is only once api call will be done and the result will be stored from the second request if the result is same then it gets from this data  will display there will be no delay like loading untill again a new api call done