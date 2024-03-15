// @ts-nocheck
import { BoxHeader } from "@/components/BoxHeader";
import { useGetKpisQuery } from "@/state/api";
import { GetKpisResponse } from "../../../shared/types";
import { useMemo } from "react";
import { themeSettings, tokensDark } from "@/theme";
import { useTheme } from "@mui/material";
import { Suspense, lazy } from "react";
import Loading from "./Loading";
import BoxA from "./BoxA";
import BoxB from "./BoxB";
import BoxC from "./BoxC";

export default function Row1() {
  const { data } = useGetKpisQuery();

  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);

  const totalData = useMemo(() => {
    let totalProfit = 0;
    let totalExpenses = 0;
    let totalRevenue = 0;

    if (data) {
      if (data[0]) {
        totalProfit = data[0].totalProfit || 0;
        totalExpenses = data[0].totalExpenses || 0;
        totalRevenue = data[0].totalRevenue || 0;
      }
    }

    return {
      totalProfit,
      totalExpenses,
      totalRevenue,
    };
  }, [data]);

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <>
      <BoxA
        totalExpenses={totalData.totalExpenses}
        totalRevenue={totalData.totalRevenue}
        revenueExpenses={revenueExpenses}
      />
      <BoxB
        totalProfit={totalData.totalProfit}
        totalRevenue={totalData.totalRevenue}
        revenueProfit={revenueProfit}
      />
      <BoxC revenue={revenue} />
    </>
  );
}

Row1;
