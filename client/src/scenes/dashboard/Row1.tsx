
import { BoxHeader } from "@/components/BoxHeader";
import { useGetKpisQuery } from "@/state/api";
import { GetKpisResponse } from "../../../shared/types";
import { useMemo } from "react";
import { themeSettings, tokensDark } from "@/theme";
import { useTheme } from "@mui/material";
import { Suspense, lazy } from "react";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import KPIDataProcessor from "../../state/KpiDataProcessor";

const BoxA = lazy(() => import("./BoxA"));
const BoxB = lazy(() => import("./BoxB"));
const BoxC = lazy(() => import("./BoxC"));

export default function Row1() {
  const { data } = useGetKpisQuery();

  const { revenue, totalData, revenueExpenses, revenueProfit } =
    KPIDataProcessor({ data });

  return (
    <>
      <Suspense fallback={<LoadingSkeleton gridArea="a" />}>
        <BoxA
          totalExpenses={totalData.totalExpenses}
          totalRevenue={totalData.totalRevenue}
          revenueExpenses={revenueExpenses}
        />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton gridArea="b" />}>
        <BoxB
          totalProfit={totalData.totalProfit}
          totalRevenue={totalData.totalRevenue}
          revenueProfit={revenueProfit}
        />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton gridArea="c" />}>
        <BoxC revenue={revenue} />
      </Suspense>
    </>
  );
}
