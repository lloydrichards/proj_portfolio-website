import Layout from "../../components/Layout";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";

interface TaskProps {
  task: string;
  id: string;
}

const Experiment014 = () => {
  const [formData, updateFormData] = React.useState<string>("");
  const [tasks, updateTasks] = React.useState<Array<TaskProps>>([]);

  React.useEffect(() => {
    if (tasks.length > 4) {
      console.log("OVER");
      updateTasks([...tasks.slice(1)]);
    }
  }, [tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData) {
      const newArr = { task: formData, id: nanoid() };
      updateTasks([...tasks, newArr]);
      console.log(tasks);
      updateFormData("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(e.target.value);
  };

  return (
    <Layout title="Experiment | 015">
      <h2>015 - Animated Notifications</h2>
      <h4>Date: June 26th 2020</h4>
      <p>
        One of the missing features of Life of Plastic was a notification system
        that created a log of evertime a piece of plastic went through a system.
        I wanted to be able to show all the different processes and keep track
        of how plastic moved. In the code there were many times that I could
        have added a <code>addNotification()</code> that would build a string of
        the evernt and save it to the state. Then based on this array of string
        I could use Framer Motion to add and remove notifications through an
        animating feed. This will be my attempt to create this:
      </p>
      <p>Steps to take:</p>
      <ol>
        <li>Add a State and buttons to ADD and REMOVE items</li>
        <li>Render the state in a stylized component</li>
        <li>Automatically remove the last item when list is too long</li>
        <li>Animate the rendering so it ticks items in</li>
        <li>
          Limit the visible size of the list so it can be scrolled up to find
          logs
        </li>
      </ol>
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
                positionTransition
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
      <p>
        Took a little longer than I expected but I got everything in place. Can
        now export this as a styalized component that will take in the array of
        notifications.
      </p>
    </Layout>
  );
};

export default Experiment014;
