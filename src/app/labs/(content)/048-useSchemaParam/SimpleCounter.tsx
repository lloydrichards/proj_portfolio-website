"use client";
import { Button } from "@/components/atom/button";
import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border p-4">
      <h1 className="text-2xl font-bold">Counter Component</h1>
      <p className="text-lg">This is a simple counter component.</p>
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <span className="w-20 rounded border text-center text-xl">{count}</span>
        <Button variant="outline" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </div>
    </div>
  );
};
