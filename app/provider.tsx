import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function Provider( { children }: { children: React.ReactNode }) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider >
      <main className="dark text-foreground bg-background h-full w-full">
        <div className="pt-72 bg-black">
          {/* TEMPORARY */}
        </div>
        { children }
        <div className="pt-32 bg-black">
          {/* TEMPORARY */}
        </div>
      </main>
      
    </NextUIProvider>
  );
}