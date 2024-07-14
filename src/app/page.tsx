import { FlightSearch } from "@/components/FlightSearch";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-green-950 flex-col items-center justify-between p-24">
      <FlightSearch />
    </main>
  );
}
