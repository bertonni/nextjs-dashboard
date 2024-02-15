import { Metadata } from "next";
import Table from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  return <Table query={query} />;
}
