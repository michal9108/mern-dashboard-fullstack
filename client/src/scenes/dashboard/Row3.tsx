// @ts-nocheck
import {  useTheme } from "@mui/material";
import {

  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import BoxG from "./BoxG";
import BoxH from "./BoxH";
import BoxI from "./BoxI";
import { funnelStore } from "../../../../server/data/data";
const Row3 = () => {
  const theme = useTheme();

  //mockup data from data.js

  let shippingCosts = funnelStore[0].shippingCosts;
  let coupons = funnelStore[0].coupons;
  let refunds = funnelStore[0].refunds;
  let taxes = funnelStore[0].taxes;

  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  return (
    <>
      <BoxG productData={productData} />
      <BoxH transactionData={transactionData} />
      <BoxI
        shippingCosts={shippingCosts}
        coupons={coupons}
        taxes={taxes}
        refunds={refunds}
      />
    </>
  );
};

export default Row3;
