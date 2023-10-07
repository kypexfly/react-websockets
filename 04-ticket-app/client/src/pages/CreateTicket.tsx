import Container from "../components/Container";
import { Button } from "../components/ui/Button";
import { useHideMenu } from "../hooks/useHideMenu.ts";

const CreateTicket = () => {
  useHideMenu(true);

  return (
    <Container>
      <div className="max-w-xl mx-auto flex flex-col gap-6 text-center">
        <h2 className="text-3xl font-bold">Press the button to create a new ticket</h2>
        <Button className="bg-blue-500">New ticket</Button>

        <div>
          Your number: <br />
          <span className="text-green-500 font-bold text-5xl">55</span>
        </div>
      </div>
    </Container>
  );
};

export default CreateTicket;
