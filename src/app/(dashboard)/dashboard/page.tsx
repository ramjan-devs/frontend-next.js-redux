export const metadata = {
  title: 'Dashboard - Invictus Labs',
  description: 'Invictus Labs Dashboard Overview',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome to your Invictus Labs dashboard.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Total Projects</h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
          <p className="text-2xl font-bold mt-2">1,248</p>
        </div>
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">System Status</h3>
          <p className="text-2xl font-bold mt-2 text-emerald-500">Operational</p>
        </div>
      </div>
    </div>
  );
}
