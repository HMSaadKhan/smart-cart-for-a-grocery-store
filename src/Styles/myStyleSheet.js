import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#00adb5",
  secondary: "#95defb",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  buyerSite: "#ba6a62",
  AdminSite: "#73c2fb",
  bgSite: "#9ca677",
  textColor: "#ffb12a",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
  red: "#FF0000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.bgSite,
    },
    danger: {
      main: Colors.red,
    },
    text: {
      primary: Colors.textColor,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "standard",
        fullWidth: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        divider: "true",
      },
    },
    MuiListItem: {
      height: "30px",
    },
    MuiListItemButton: {
      height: "30px",
    },
  },
});
export default theme;
