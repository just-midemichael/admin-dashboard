import TopBar from './scenes/global/TopBar';
import { ColorModeContext } from './themes/colorModeContext';
import { useMode } from './themes/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className='app'>
            <main className='content'>
              <TopBar/>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App
