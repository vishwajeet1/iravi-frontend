import { styled } from "@mui/material/styles";
import {
  alpha,
  OutlinedInputProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#6466f2",
  },
  "& .MuiInput-underline:after": {
    // borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e5e7eb",
    },
    "&:hover": {
      backgroundColor: "#fcfcfb",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6466f2",
    },
  },
});

export const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "transparent",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default CssTextField;
