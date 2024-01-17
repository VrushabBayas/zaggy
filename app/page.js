import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals">Meals</Link>
      </p>
      <p style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals/share">Share Meal</Link>
      </p>
      <p style={{ color: "white", textAlign: "center" }}>
        <Link href="/community">Share Meal</Link>
      </p>
    </main>
  );
}
