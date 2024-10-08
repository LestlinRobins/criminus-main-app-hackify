// components/AppUpdate.jsx
import React from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

export function AppUpdate() {
  useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  return null;
}
