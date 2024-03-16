// @ts-nocheck

import { useGetTransactionsQuery } from "@/state/api";
import { useMemo } from "react";
import { funnelStore } from "../../../../server/data/data";
import { Suspense, lazy } from "react";
import Loading from "./Loading";
const BoxD = lazy(() => import("./BoxD"));
const BoxE = lazy(() => import("./BoxE"));
const BoxF = lazy(() => import("./BoxF"));
const BoxJ = lazy(() => import("./BoxJ"));

export default function Row2() {
  const { data: transactionalData } = useGetTransactionsQuery();

  const totalOrderData = useMemo(() => {
    let totalOrders = 0;

    if (transactionalData) {
      totalOrders = transactionalData?.length;
    }

    return {
      totalOrders,
    };
  }, [transactionalData]);

  const averageOrderValue = useMemo(() => {
    if (transactionalData) {
      let sumOfOrders = transactionalData.reduce(
        (acc, currentValue) => acc + currentValue.amount,
        0,
      );
      return (sumOfOrders / totalOrderData.totalOrders).toFixed(2);
    }
  }, [transactionalData]);

  const getTotal = (key: string) =>
    funnelStore[0]?.ordersData.reduce(
      (acc: any, currentValue: { [x: string]: any }) => acc + currentValue[key],
      0,
    );

  const totalVisitors = getTotal("visitors");
  const totalSessions = getTotal("sessions");
  const totalCarts = getTotal("addtocart");
  const totalCheckouts = getTotal("checkouts");
  const totalPurchases = getTotal("purchase");
  const conversionRate = ((totalPurchases / totalVisitors) * 100).toFixed(2);

  return (
    <>
      <Suspense fallback={<Loading gridArea="d" />}>
        <BoxD
          totalOrders={totalOrderData.totalOrders}
          averageOrderValue={averageOrderValue}
        />
      </Suspense>
      <Suspense fallback={<Loading gridArea="e" />}>
        <BoxE
          totalPurchases={totalPurchases}
          conversionRate={conversionRate}
          totalCheckouts={totalCheckouts}
          totalCarts={totalCarts}
        />
      </Suspense>
      <Suspense fallback={<Loading gridArea={"j"} />}>
        <BoxJ />
      </Suspense>
      <Suspense fallback={<Loading gridArea="f" />}>
        <BoxF totalSessions={totalSessions} totalVisitors={totalVisitors} />
      </Suspense>
    </>
  );
}
