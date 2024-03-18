
import { Card, CardContent, Typography, Rating, CardActions, Button, Collapse,  useTheme } from '@mui/material';
import React, { useState } from 'react'

export default function  ProductCard({ _id, price, expense, totalTransactions }) {

  const theme = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.text.primary}
          gutterBottom
        >
          Category: Accessories
        </Typography>
        <Typography sx={{ mb: "1rem" }} color={theme.palette.text.primary}>
          First name & Last name
        </Typography>
        <Typography sx={{ mb: "1rem" }} color={theme.palette.text.primary}>
          Price : ${Number(price).toFixed(2)}
        </Typography>
        <Typography sx={{ mb: "1rem" }} color={theme.palette.text.primary}>
          Expense : ${Number(expense).toFixed(2)}
        </Typography>
        <Typography sx={{ mb: "1rem" }} color={theme.palette.text.primary}>
          Total Transactions : {totalTransactions}
        </Typography>
        <Rating value={4.84} readOnly />

        <Typography variant="body2">Personal Accessories</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ color: theme.palette.text.primary }}
          variant="text"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        <CardContent>
          <Typography>id:{_id}</Typography>
          <Typography>Supply Left: </Typography>
          <Typography>Yearly Sales This Year: {11000}</Typography>
          <Typography>Yearly Units Sold This Year: {10423}</Typography>
          <Typography>{}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
