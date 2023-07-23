import { tokens } from "./tonkens";

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" 
            ? {
                // palette value for dark mode
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                nuetral: {
                    main: colors.grey[500],
                    dark: colors.grey[700],
                    light: colors.grey[100],
                },
                background: {
                    default: colors.primary[500],
                },
            } 
            : {
                // palette values for light mode
            primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
            }),
        },
        typography: {
            fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 40,
            }, 
            h2: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 32,
            }, 
            h3: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 24,
            }, 
            h4: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 20,
            }, 
            h5: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 16,
            }, 
            h6: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 14,
            },
            h7: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 12,
            },
            h8: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 10,
            },
            h9: {
                fontFamily: ['PT Sans Caption', 'sans-serif'].join(","),
                fontSize: 8,
            },
        }
    }
}