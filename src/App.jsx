import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>
            Track progress and recent activity for your Vite app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Your design system is ready. Start building your next component.
        </CardContent>
      </Card>
    </section>
  );
}

export default App;
