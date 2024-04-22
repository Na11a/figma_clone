"use client";

import { useOthers } from "../assets/liveblocks.config";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
}