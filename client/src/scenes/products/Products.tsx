import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  Container,
  Divider,
  Stack,
} from "@mui/material";

import ProductDataProcessor from "@/state/ProductDataProcessor";
import { useMediaQueries } from "../../../shared/screensResponsivness";

import { Suspense, lazy } from "react";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const ProductCard = lazy(() => import("./ProductCard"));

const Products = () => {

  const theme = useTheme();

  const { productData, totalTransactionsPerProduct } = ProductDataProcessor();

  const {
    isAboveLargeScreens,
    isAboveExtraLargeScreens,
    isAboveMobileScreens,
  } = useMediaQueries();

  return (
    <>
      <Stack spacing={2}>
        <Container
          maxWidth="xs"
          sx={{
            width: "100%",
            height: "100%",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            gap="1rem"
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column"
          >
            <Typography
              component="h2"
              variant="h2"
              style={{ color: theme.palette.text.primary }}
            >
              Products
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              style={{ color: theme.palette.text.primary }}
            >
              See your list of products
            </Typography>
          </Box>
        </Container>
        <Divider />
        <Box>
  
        {productData ? (
            <Box
              display="grid"
              gridTemplateColumns="repeat(4, minmax(200px, 1fr))"
              justifyContent="space-between"
              // rowGap="20px"
              columnGap="1.5rem"
              rowGap="1.5rem"
              gridTemplateAreas="gridTemplateLargeScreens"
              padding="0.5rem 1.5rem 4rem 1.5rem"
              sx={
                isAboveExtraLargeScreens
                  ? {
                      gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
                      gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                      columnGap: "1.5rem",
                      rowGap: "1.5rem",
                      justifyContent: "space-between",
                      padding: "0.5rem 1.5rem 4rem 1.5rem",
                    }
                  : isAboveMobileScreens
                    ? {
                        gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
                        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                        columnGap: "1.5rem",
                        rowGap: "1.5rem",
                        justifyContent: "space-between",
                        padding: "0.5rem 1.5rem 4rem 1.5rem",
                      }
                    : {
                        gridTemplateColumns: "repeat(1, minmax(80px, 1fr))",
                        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",

                        columnGap: "1.5rem",
                        rowGap: "1.5rem",
                        justifyContent: "space-between",
                        padding: "0.5rem 1.5rem 4rem 1.5rem",
                        gridAutoRows: "80px",
                      }
              }
            >
              {productData.map(({ _id, expense, price }) => (
                      <Suspense  key={_id} fallback={ <LoadingSkeleton gridArea={`product_${_id}`} />}>

                <ProductCard
                  key={_id}
                  _id={_id}
                  price={price}
                  expense={expense}
                  totalTransactions={totalTransactionsPerProduct[_id]}
                />
                </Suspense>
              ))}
              
            </Box>
         ) : (
       <>Loading</>
        )}
        </Box>
      </Stack>
    </>
  );
};

export default Products;
