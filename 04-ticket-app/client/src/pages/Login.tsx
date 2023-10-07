import React, { useLayoutEffect, useState } from "react";
import Container from "../components/Container";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

import { useNavigate } from "react-router-dom";
import useGetUserStorage from "../hooks/useGetUserStorage";
import { useHideMenu } from "../hooks/useHideMenu";

const Login = () => {
  const navigate = useNavigate();
  const [user] = useState(useGetUserStorage());

  useLayoutEffect(() => {
    if (user.agent && user.desk) {
      navigate("/desk");
    }
  }, [navigate, user]);

  console.log(user);

  useHideMenu(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const agent = e.currentTarget.agent.value;
      const desk = parseInt(e.currentTarget.desk.value);

      onFinish({ agent, desk });
    } catch (error) {
      onFinishError(error);
    }
  };

  const onFinish = ({ agent, desk }: { agent: string; desk: number }) => {
    console.log("Success");
    localStorage.setItem("agent", agent);
    localStorage.setItem("desk", desk.toString());

    navigate("/desk");
  };

  const onFinishError = (errorInfo: unknown) => console.log(errorInfo);

  return (
    <Container>
      <h2 className="font-bold text-3xl mb-3">Login</h2>
      <p>Enter your agent name and desk number to login to the system.</p>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto my-8">
        <div className="flex flex-col gap-6">
          <Input name="agent" type="text" placeholder="Agent name" required />
          <Input name="desk" type="number" placeholder="Enter a number" required />
          <Button>Enter</Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
