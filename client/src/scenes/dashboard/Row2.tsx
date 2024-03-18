
import TransactionalDataProcessor from "@/state/TransactionalDataProcessor";
import { Suspense, lazy } from "react";
import LoadingSkeleton from  "../../components/LoadingSkeleton";

const BoxD = lazy(() => import("./BoxD"));
const BoxE = lazy(() => import("./BoxE"));
const BoxF = lazy(() => import("./BoxF"));
const BoxJ = lazy(() => import("./BoxJ"));

export default function Row2() {

const {totalVisitors,totalSessions, totalCarts,totalCheckouts,totalPurchases, conversionRate, averageOrderValue, totalOrderData} = TransactionalDataProcessor();

  return (
    <>
      <Suspense fallback={<LoadingSkeleton gridArea="d" />}>
        <BoxD
          totalOrders={totalOrderData.totalOrders}
          averageOrderValue={averageOrderValue}
        />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton gridArea="e" />}>
        <BoxE
          totalPurchases={totalPurchases}
          conversionRate={conversionRate}
          totalCheckouts={totalCheckouts}
          totalCarts={totalCarts}
        />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton gridArea={"j"} />}>
        <BoxJ />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton gridArea="f" />}>
        <BoxF totalSessions={totalSessions} totalVisitors={totalVisitors} />
      </Suspense>
    </>
  );
}
