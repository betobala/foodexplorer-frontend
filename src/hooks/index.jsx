
import { AuthProvider } from './auth';
import { SearchProvider } from './search';

function AppProvider({ children }) {
return(
  <AuthProvider>
    <SearchProvider>{children}</SearchProvider>
  </AuthProvider>
  )
}

export default AppProvider;
