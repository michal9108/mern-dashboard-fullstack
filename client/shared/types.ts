export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export  interface HeaderTypes  {
  title: string;
  icon?: React.ReactNode;
  totalProfit?: number;
  totalExpenses?: number;
  totalRevenue?: number;
  totalOrders?: number;
  totalSessions?: number;
  conversionRate?: number;
}

export interface CostsFieldType {
  costTitle: string;
  costAmount: number;
  iconCosts: React.ReactNode;
}

// export default interface ModeTypes {
//     mode: "dark" | "light"; 
//     primary: Record<string, string>;
//     secondary: Record<string, string>;
//     tertiary: Record<string, string>;
//     grey: Record<string, string>;
//     background: Record<string, string>;
//   }
  
export   interface Integration {
  id: string;
  title: string;
  description: string;
  logo: string;
  installs: number;
  
}

export   interface IntegrationCardProps {
  integration: Integration;
}