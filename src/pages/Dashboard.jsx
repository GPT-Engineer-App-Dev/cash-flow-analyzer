import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarSign,
  PiggyBank,
  Wallet,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, John!</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Balance"
          value="$12,345.67"
          icon={<Wallet className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Monthly Expenses"
          value="$3,456.78"
          icon={<ArrowDownIcon className="h-4 w-4 text-red-500" />}
        />
        <DashboardCard
          title="Monthly Income"
          value="$5,678.90"
          icon={<ArrowUpIcon className="h-4 w-4 text-green-500" />}
        />
        <DashboardCard
          title="Savings"
          value="$2,222.11"
          icon={<PiggyBank className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Grocery Shopping</TableCell>
                  <TableCell>2023-05-01</TableCell>
                  <TableCell>-$85.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Salary Deposit</TableCell>
                  <TableCell>2023-04-30</TableCell>
                  <TableCell>+$3,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Electric Bill</TableCell>
                  <TableCell>2023-04-28</TableCell>
                  <TableCell>-$120.75</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <BudgetItem category="Housing" spent={1200} total={1500} />
            <BudgetItem category="Food" spent={450} total={600} />
            <BudgetItem category="Transportation" spent={200} total={300} />
            <BudgetItem category="Entertainment" spent={150} total={200} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const BudgetItem = ({ category, spent, total }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>{category}</span>
      <span>
        ${spent} / ${total}
      </span>
    </div>
    <Progress value={(spent / total) * 100} />
  </div>
);

export default Dashboard;