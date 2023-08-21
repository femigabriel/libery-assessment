import { Layout } from "@/components/layout/Layout";
import { Dashboard } from "@/components/dashboard/Dashboard";
export default function Home() {
  return (
    <>
      <Layout title="Analytics dashboard">
        <Dashboard />
      </Layout>
    </>
  );
}
