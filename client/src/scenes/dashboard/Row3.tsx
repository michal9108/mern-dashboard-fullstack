// @ts-nocheck
import { useTheme } from "@mui/material";
import { useGetProductsQuery, useGetTransactionsQuery } from "@/state/api";

import { funnelStore } from "../../../../server/data/data";
import { Suspense, lazy } from "react";
import Loading from "./Loading";

const BoxG = lazy(() => import("./BoxG"));
const BoxH = lazy(() => import("./BoxH"));
const BoxI = lazy(() => import("./BoxI"));

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
      <Suspense fallback={<Loading gridArea="g" />}>
        <BoxG productData={productData} />
      </Suspense>
      <Suspense fallback={<Loading gridArea="h" />}>
        <BoxH transactionData={transactionData} />
      </Suspense>
      <Suspense fallback={<Loading gridArea="i" />}>
        <BoxI
          shippingCosts={shippingCosts}
          coupons={coupons}
          taxes={taxes}
          refunds={refunds}
        />
      </Suspense>
    </>
  );
};

export default Row3;
