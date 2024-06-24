import { auth } from "@/config/Config";
import React from "react";

type Props = {};

export default function Dashboard({}: Props) {
 
  return (
    <main className="pt-40 ">
      <h1>
        Welcome {auth?.currentUser?.displayName || auth.currentUser?.email}
      </h1>
    </main>
  );
}
