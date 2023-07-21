import { useState } from 'react';
import { PageRouter } from './routes/PageRouter'
import SideBar from './scenes/global/SideBar';
import TopBar from './scenes/global/TopBar';
import { ColorModeContext } from './themes/colorModeContext';
import { useMode } from './themes/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className='app'>
            <SideBar isSidebar={isSidebar}/>
            <main className='content'>
              <TopBar setIsSidebar={setIsSidebar}/>
                <PageRouter/>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App
