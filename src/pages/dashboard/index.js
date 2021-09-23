import React from "react";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiEdit2 } from "react-icons/fi";
import api from "../../services/api";
import Card from "../../components/Card/index";
import { toast } from "react-toastify";
import { Container, InputContainer, TaskContainer } from "./style";

const Dashboard = ({ authenticated }) => {
  const [task, setTask] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  const loadTask = () => {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {
        const apiTasks = response.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTask(apiTasks);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTask();
  }, []);

  const onSubmit = ({ task }) => {
    if (!task) {
      return toast.error("Complete o campo para enviar a tarefa");
    }

    api
      .post(
        "/task",
        {
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTask());
  };

  const handleRemoved = (id) => {
    const newTasks = task.filter((task) => task._id !== id);
    api
      .put(
        `/task/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setTask(newTasks));
  };

  if (!authenticated) {
    return <Redirect to="login" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <time>23 de setembro de 2021</time>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova tarefa"
            register={register}
            name="task"
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TaskContainer>
        {task.map((task) => (
          <Card
            key={task._id}
            title={task.description}
            date={task.createdAt}
            onClick={() => {
            handleRemoved(task._id);
            }}
          />
        ))}
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
