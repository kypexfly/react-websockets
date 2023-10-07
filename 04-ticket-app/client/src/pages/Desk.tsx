import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { Button } from "../components/ui/Button";
import { useHideMenu } from "../hooks/useHideMenu";
import useGetUserStorage from "../hooks/useGetUserStorage";
import { useState } from "react";

const Desk = () => {
  useHideMenu(false);
  const navigate = useNavigate();
  const [user] = useState(useGetUserStorage());

  if (!user.agent || !user.desk) {
    navigate("/desk");
  }

  const nextTicket = () => {
    console.log("next ticket");
  };

  const logout = () => {
    localStorage.removeItem("agent");
    localStorage.removeItem("desk");
    navigate("/login");
  };

  return (
    <Container>
      <div>
        <div className="text-right">
          <Button onClick={logout} className="bg-red-500">
            Exit
          </Button>
        </div>

        <h2 className="font-bold text-3xl mb-3">Ricardo</h2>

        <p>
          You are working on desk: <span className="font-bold text-green-500">5</span>.
        </p>
      </div>

      <div>
        Attending ticket number: <span className="font-bold text-3xl text-red-500">55</span>
      </div>

      <div className="text-right">
        <Button onClick={nextTicket} className="bg-blue-500">
          Next Ticket
        </Button>
      </div>
    </Container>
  );
};

export default Desk;
