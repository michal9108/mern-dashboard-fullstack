import React, { useMemo } from 'react'
import { useGetKpisQuery } from './api';

function KPIDataProcessor({data}) {


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
  
  return { revenue,
    totalData,
    revenueExpenses,
    revenueProfit}
}

export default KPIDataProcessor
