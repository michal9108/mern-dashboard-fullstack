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
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const isAboveMobileScreens = useMediaQuery("(min-width: 425px)");

  return { isAboveMediumScreens, isAboveSmallScreens, isAboveMobileScreens };
};
