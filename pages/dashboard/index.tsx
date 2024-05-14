import React from "react";
import { useRouter } from "next/router";

export default function Dashboard({ isLoggedIn }: any) {
  const router = useRouter();

  if (!isLoggedIn) {
    return (
      <div className="h-screen p-4 text-[18px] text-red-500">
        Please log in to view this page.
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex-grow p-4">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <p>Welcome to your dashboard!</p>
        <button onClick={() => router.push("/dashboard/table")}>Next Page</button>
        {/* Dashboard content goes here */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // Implement your authentication check here
  const isLoggedIn = true;

  return {
    props: { isLoggedIn },
  };
}
