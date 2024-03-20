
import { Suspense, lazy } from "react";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import ProductDataProcessor from "@/state/ProductDataProcessor";

const BoxG = lazy(() => import("./BoxG"));
const BoxH = lazy(() => import("./BoxH"));
const BoxI = lazy(() => import("./BoxI"));

const Row3 = () => {
 

  const { shippingCosts, coupons, refunds, taxes, productData, transactionData } = ProductDataProcessor();

  return (
    <>
      <Suspense fallback={<LoadingSkeleton gridArea="g" />}>
        <BoxG productData={productData} />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton gridArea="h" />}>
        <BoxH transactionData={transactionData} />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton gridArea="i" />}>
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
