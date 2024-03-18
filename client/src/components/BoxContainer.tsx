import { useTheme } from "@mui/material";
import { useMediaQueries } from "../../shared/screensResponsivness"
export default function BoxContainer( {children}) {
const {applyFontStyles} = useMediaQueries();
  const theme = useTheme();
  return (
    <span
        style={{
          ...applyFontStyles,
          margin: "1.5rem 1.5rem 1.5rem 1.5rem",
          padding: "0.5rem" ,
          borderRadius: "0.4rem",
        }}
      >
      {children}
      </span>
  )
}
