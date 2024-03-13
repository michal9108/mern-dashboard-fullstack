import { useTheme } from "@mui/material";

export default function BoxContainer( {children}) {
  const theme = useTheme();
  return (
    <span
        style={{
          backgroundColor: theme.palette.container.secondary,
          margin: "1.5rem 1.5rem 1.5rem 1.5rem",
          padding: "0.5rem" ,
          borderRadius: "0.4rem",
        }}
      >
      {children}
      </span>
  )
}
