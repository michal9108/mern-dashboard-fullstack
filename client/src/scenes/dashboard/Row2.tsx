// @ts-nocheck

import { useGetTransactionsQuery } from "@/state/api";
import { useMemo } from "react";
import { funnelStore } from "../../../../server/data/data";
import BoxD from "./BoxD";
import BoxE from "./BoxE";
import BoxF from "./BoxF";

const Row2 = () => {

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
      (acc: any, currentValue: { [x: string]: any; }) => acc + currentValue[key],
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
      <BoxD
        totalOrders={totalOrderData.totalOrders}
        averageOrderValue={averageOrderValue}
      />
      <BoxE
        totalPurchases={totalPurchases}
        conversionRate={conversionRate}
        totalCheckouts={totalCheckouts}
        totalCarts={totalCarts}
      />
      <BoxF totalSessions={totalSessions} totalVisitors={totalVisitors} />
    </>
  );
};

export default Row2;
