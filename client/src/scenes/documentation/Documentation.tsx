import React from "react";
import { Typography, Container, Box } from "@mui/material";

const BlogPost = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
      }}
    >
      <Box my={5} maxWidth={500}>
        <Typography variant="h1" gutterBottom>
          Lightweight Documentation of Tracking Advertisement Software
        </Typography>
        <Box my={5}>
          <Typography variant="h2" my={3} gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1" my={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            ultricies odio, quis tempus odio. Donec sit amet ullamcorper magna.
            Ut id diam vehicula, tincidunt tortor et, malesuada enim. Aliquam
            erat volutpat. Vivamus ac nisi id justo vestibulum condimentum.
            Curabitur malesuada risus ex, vel lacinia eros commodo sit amet. Sed
            auctor nunc in nunc sollicitudin, nec luctus purus tincidunt.
            Vestibulum aliquet nisl nec urna hendrerit scelerisque. Phasellus
            aliquam, tellus et feugiat condimentum, mauris tellus volutpat
            neque, vel pulvinar nunc arcu sed nulla. Maecenas nec accumsan odio.
            Fusce et elit at urna elementum tincidunt.
          </Typography>
        </Box>
        <Box my={5}>
          <Typography variant="h2" gutterBottom my={3}>
            Features
          </Typography>
          <Typography variant="body1" my={3}>
            Nullam pulvinar tellus vitae sem faucibus, a fermentum nibh commodo.
            Ut ullamcorper auctor mauris, et tempus nisi eleifend id. Donec sit
            amet malesuada nisi. Proin vel nisi ut sapien rutrum tincidunt.
            Vivamus et purus eu mi vehicula mollis. Phasellus vel posuere nunc,
            ac ullamcorper leo. Curabitur tincidunt vel lorem nec vestibulum.
            Nam consectetur arcu id sapien iaculis, sed facilisis turpis cursus.
            Morbi suscipit, arcu nec bibendum commodo, elit eros condimentum
            magna, vel pretium dui urna nec lorem.
          </Typography>
        </Box>
        <Box my={5}>
          <Typography variant="h2" gutterBottom my={3}>
            Conclusion
          </Typography>
          <Typography variant="body1" my={3}>
            Curabitur id consequat quam. Suspendisse potenti. Nulla dapibus diam
            nec nisi volutpat, nec mattis metus cursus. Suspendisse id ultrices
            nisl. Fusce id magna nisi. Ut sed ante ut libero sodales iaculis.
            Integer viverra ipsum non libero aliquet malesuada. Vestibulum sed
            lectus vel leo convallis viverra. Proin hendrerit, ipsum in vehicula
            viverra, dui eros pellentesque urna, nec facilisis nisl sapien nec
            justo. Vestibulum in lorem nec leo lacinia tempor. Morbi id metus
            orci. Integer venenatis ligula eget lectus auctor, id tincidunt mi
            faucibus. Nam aliquet sem at purus ullamcorper tincidunt.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPost;
