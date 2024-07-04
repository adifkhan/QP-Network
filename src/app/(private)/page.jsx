"use client";

import { useAppSelector } from "@/redux/store";

export default function Home() {
  const { auth } = useAppSelector((state) => state.authReducer);

  // console.log("user:", auth);
  return <main>Quantum Possiblities private layout</main>;
}
