import React, { useMemo } from "react";
import { useGetProductsQuery, useGetTransactionsQuery } from "./api";
import { funnelStore } from "../../../server/data/data";

function ProductDataProcessor() {
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  let shippingCosts = funnelStore[0].shippingCosts;
  let coupons = funnelStore[0].coupons;
  let refunds = funnelStore[0].refunds;
  let taxes = funnelStore[0].taxes;

  const totalTransactionsPerProduct = useMemo(() => {
    if (productData) {
      const transactionsPerProduct = {};
      productData.forEach((product) => {
        transactionsPerProduct[product._id] = product.transactions.length;
      });
      return transactionsPerProduct;
    }
    return {};
  }, [productData]);


  return {
    shippingCosts,
    coupons,
    refunds,
    taxes,
    productData,
    transactionData,
    totalTransactionsPerProduct,
  };
}

export default ProductDataProcessor;
