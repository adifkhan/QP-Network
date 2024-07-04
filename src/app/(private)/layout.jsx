"use client";

import React from "react";
import Header from "@/components/shared/Header";

export default function PrivateLayout({ children }) {
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  return (
    <div>
      <Header userMenuOpen={userMenuOpen} setUserMenuOpen={setUserMenuOpen} />
      <div onClick={() => setUserMenuOpen(false)}>{children}</div>
    </div>
  );
}
