import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TaskProps {
  task: string;
  id: string;
}

export const NotificationForm = () => {
  const [formData, updateFormData] = React.useState<string>("");
  const [tasks, updateTasks] = React.useState<Array<TaskProps>>([]);

  React.useEffect(() => {
    if (tasks.length > 4) {
      // console.log("OVER");
      updateTasks([...tasks.slice(1)]);
    }
  }, [tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData) {
      const newArr = { task: formData, id: Math.random().toString() };
      updateTasks([...tasks, newArr]);
      // console.log(tasks);
      updateFormData("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Submit Task
          <input
            type="input"
            name="name"
            value={formData}
            onChange={handleChange}
          />
        </label>

        <button>Add</button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          listStyle: "none",
          justifyContent: "flex-end",
        }}
      >
        <ul>
          <AnimatePresence initial={false}>
            {tasks?.map((task) => (
              <motion.li
                style={{
                  width: "300px",
                  height: "50px",
                  background: "tomato",
                  margin: "10px",
                  flex: "0 0 100px",
                  position: "relative",
                  borderRadius: "10px",
                }}
                key={task.id}
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
                <h2>{task.task}</h2>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};
