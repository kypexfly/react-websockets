import React from "react";
import Container from "../components/Container";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/desk");
  };

  return (
    <Container>
      <h2 className="font-bold text-3xl mb-3">Login</h2>
      <p>Enter your agent name and desk number to login to the system.</p>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto my-8">
        <div className="flex flex-col gap-6">
          <Input name="name" type="text" placeholder="Agent name" required />
          <Input name="desk" type="number" placeholder="Enter a number" required />
          <Button>Enter</Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
