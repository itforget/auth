import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-semibold">1,234</p>
                        <span className="text-muted-foreground">Active users</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-semibold">$12,345</p>
                        <span className="text-muted-foreground">This month</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-semibold">98%</p>
                        <span className="text-muted-foreground">Uptime</span>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}