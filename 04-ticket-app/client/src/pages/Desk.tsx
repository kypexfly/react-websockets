import Container from "../components/Container";
import { Button } from "../components/ui/Button";

const Desk = () => {
  return (
    <Container>
      <div>
        <div className="text-right">
          <Button className="bg-red-500">Exit</Button>
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
        <Button className="bg-blue-500">Next Ticket</Button>
      </div>
    </Container>
  );
};

export default Desk;
