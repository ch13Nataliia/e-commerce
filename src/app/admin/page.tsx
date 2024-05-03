import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';



export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle="Subtitle"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum est maxime accusantium. Ab ipsum ipsam vero unde hic mollitia, maiores, distinctio facilis earum ducimus eius a temporibus fuga suscipit."
      />
      
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
