import { useState } from "react";
import Container from "../components/Container";
import { Button } from "../components/ui/Button";
import { useHideMenu } from "../hooks/useHideMenu.ts";
import { useSocketContext } from "../hooks/useSocketContext.ts";

const CreateTicket = () => {
  useHideMenu(true);

  const { socket } = useSocketContext();
  const [ticket, setTicket] = useState<Ticket>();

  const newTicket = () => {
    socket.emit("require-ticket", null, (ticket: Ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <Container>
      <div className="max-w-xl mx-auto flex flex-col gap-6 text-center">
        <h2 className="text-3xl font-bold">Press the button to create a new ticket</h2>
        <Button onClick={newTicket} className="bg-blue-500">
          New ticket
        </Button>

        {ticket && (
          <div>
            Your number: <br />
            <span className="text-green-500 font-bold text-5xl">{ticket?.number}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CreateTicket;
