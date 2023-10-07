import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { Button } from "../components/ui/Button";
import { useHideMenu } from "../hooks/useHideMenu";
import useGetUserStorage from "../hooks/useGetUserStorage";
import { useState } from "react";
import { useSocketContext } from "../hooks/useSocketContext";

const Desk = () => {
  useHideMenu(false);
  const navigate = useNavigate();

  const { socket } = useSocketContext();
  const [user] = useState(useGetUserStorage());
  const [ticket, setTicket] = useState<Ticket>();

  if (!user.agent || !user.desk) {
    navigate("/desk");
  }

  const nextTicket = () => {
    console.log(user);
    socket.emit("next-ticket", user, (ticket: Ticket) => {
      setTicket(ticket);
    });
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

        <h2 className="font-bold text-3xl mb-3">Agent: {user.agent}</h2>

        <p>
          You are working on desk: <span className="font-bold text-green-500">{user.desk}</span>.
        </p>
      </div>

      {ticket && (
        <div>
          Attending ticket number:{" "}
          <span className="font-bold text-3xl text-red-500">{ticket.number}</span>
        </div>
      )}

      <div className="text-right">
        <Button onClick={nextTicket} className="bg-blue-500">
          Next Ticket
        </Button>
      </div>
    </Container>
  );
};

export default Desk;
