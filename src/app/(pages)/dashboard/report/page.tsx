import Chart from "@/components/Chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  { id: 1, date: "2023-05-15", description: "Order #1001", amount: 45.99 },
  { id: 2, date: "2023-05-14", description: "Order #1000", amount: 32.5 },
  { id: 3, date: "2023-05-13", description: "Order #999", amount: 78.25 },
]

export default function Billing() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Billing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$12,345.67</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Orders This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">256</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$48.22</p>
          </CardContent>
        </Card>
        <Chart />
      </div>
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

