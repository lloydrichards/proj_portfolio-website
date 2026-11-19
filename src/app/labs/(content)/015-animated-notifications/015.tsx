"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { type FormEvent, useRef, useState } from "react";
import { Button } from "@/components/atom/button";
import { Input } from "@/components/atom/input";

interface Task {
  text: string;
  id: number;
}

export function NotificationForm() {
  const [formData, setFormData] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const nextId = useRef(0);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = formData.trim();
    if (!text) return;

    const task = { text, id: nextId.current++ };
    setTasks((previous) => [...previous.slice(-3), task]);
    setFormData("");
  }

  return (
    <div className="not-prose my-6 rounded-lg border p-4">
      <form className="flex flex-wrap items-end gap-2" onSubmit={handleSubmit}>
        <label className="grid max-w-full flex-1 gap-1 text-sm">
          Submit task
          <Input
            name="task"
            value={formData}
            onChange={(event) => setFormData(event.target.value)}
          />
        </label>
        <Button type="submit">Add</Button>
      </form>
      <ul aria-live="polite" className="grid max-h-64 gap-2 overflow-auto">
        <AnimatePresence initial={false}>
          {tasks.map((task) => (
            <motion.li
              className="wrap-anywhere rounded-md bg-orange-200 p-3 text-orange-950 first:mt-3"
              key={task.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
            >
              {task.text}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
