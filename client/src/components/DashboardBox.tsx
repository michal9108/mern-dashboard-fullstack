import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({


  backgroundColor: theme.palette.container.main,
  borderRadius: "0.4rem",
  boxShadow:
    "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
}));

export default DashboardBox;


// import { Box } from "@mui/material";
// import { styled } from "@mui/system";
// import { useTheme } from "@mui/material/styles"; 

// const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor:'primary.light', 
//   borderRadius: "0.4rem",
 
// }));

// const DashboardBox = () => {
//   const theme = useTheme(); 

//   return <StyledBox theme={theme} />;
// };

// export default DashboardBox;
