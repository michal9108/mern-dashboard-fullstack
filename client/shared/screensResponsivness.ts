import { useMediaQuery } from "@mui/material";

export const gridTemplateLargeScreens = `
 "a b c"
 "a b c"
 "a b c"
 "a b c"
 "a b c"
 "a b c"

 "d e f"
 "d e f"
 "d j f"
 "d j f"

 "g h i"
 "g h i"
 "g h i"
 "g h i"
 
`;
export const gridTemplateSmallScreens = `
 "a"
 "a"
 "a"
 "a"
 "b"
 "b"
 "b"
 "b"
 "c"
 "c"
 "c"
 "c"
 "d"
 "d"
 "d"
 "e"
 "e"
 "e"
 "e"
 "j"
 "j"
 "j"
 "j"
 "f"
 "f"
 "f"
 "g"
 "g"
 "g"
 "g"
 "h"
 "h"
 "h"
 "h"
 "i"
 "i"
 "i"
 "i"
`;

export const useMediaQueries = () => {
  const isAbove4KScreens = useMediaQuery("(min-width: 2555px)");
  const isAboveLaptopScreens= useMediaQuery("(min-width: 1435px)");
  const isAboveExtraLargeScreens = useMediaQuery("(min-width: 1200px)");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1020px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 760px)");
  const isAboveMobileScreens = useMediaQuery("(min-width: 420px)");
  const isAboveSmallMobileScreens = useMediaQuery("(min-width: 370px)");
  const isAboveExtraSmallMobileScreens = useMediaQuery("(min-width: 315px)");



  const applyFontStyles = () => {
    if (isAbove4KScreens) {
      return {
        fontSize: "20px",
        fontWeight: "600",
      };
    } else if (isAboveLaptopScreens) {
      return {
        fontSize: "10px",
        fontWeight: "400",
      };
    } else if (isAboveExtraLargeScreens) {
      return {
        fontSize: "12px",
        fontWeight: "400",
      };
    } else if (isAboveLargeScreens) {
      return {
        fontSize: "18px",
        fontWeight: "700",
      };
    } else if (isAboveSmallScreens) {
      return {
        fontSize: "20px",
        fontWeight: "600",
      };
    } else if (isAboveMobileScreens) {
      return {
        fontSize: "14px",
        fontWeight: "500",
      };
    } else if (isAboveSmallMobileScreens) {
      return {
        fontSize: "16px",
        fontWeight: "500",
      };
    } else {
      return {
        fontSize: "14px",
        fontWeight: "400",
      };
    }


  };


  return {applyFontStyles, isAboveExtraSmallMobileScreens, isAbove4KScreens, isAboveLaptopScreens, isAboveExtraLargeScreens,isAboveLargeScreens, isAboveSmallScreens, isAboveMobileScreens, isAboveSmallMobileScreens };
};

