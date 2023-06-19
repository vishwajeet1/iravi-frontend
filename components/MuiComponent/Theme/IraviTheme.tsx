import { createContext, FunctionComponent, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface Props {}
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export enum ColorModeDto {
  LIGHT = "light",
  DARK = "dark",
}

const IraviTheme: FunctionComponent<Props> = ({ children }) => {
  const [mode, setMode] = useState<ColorModeDto>(ColorModeDto.LIGHT);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === ColorModeDto.LIGHT
            ? ColorModeDto.DARK
            : ColorModeDto.LIGHT
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default IraviTheme;
