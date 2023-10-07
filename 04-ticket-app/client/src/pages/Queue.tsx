import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useHideMenu } from "../hooks/useHideMenu";
import { useSocketContext } from "../hooks/useSocketContext";
import { cn } from "../utils/cn";
import { getLatest } from "../utils/getLatest";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Tag = ({ children, className, ...props }: TagProps) => {
  return (
    <span
      className={cn(
        "bg-slate-700 text-white font-bold uppercase text-sm px-2 rounded flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

const Queue = () => {
  useHideMenu(true);

  const { socket } = useSocketContext();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    socket.on("ticket-assigned", (assigned: Ticket[]) => {
      console.log(assigned);
      setTickets(assigned);
    });

    return () => {
      socket.off("ticket-assigned");
    };
  }, [socket]);

  useEffect(() => {
    getLatest().then(setTickets);
  }, []);

  return (
    <Container>
      <div className="mb-3">
        <h2 className="font-bold text-3xl mb-3">Attending client</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <ul className="space-y-3">
            {tickets?.slice(0, 3).map((item) => (
              <li className="flex gap-3 py-3 border" key={item.number}>
                <Tag className="text-3xl bg-transparent text-black">#{item.number}</Tag>
                <Tag className="bg-orange-500">{item.agent}</Tag>
                <Tag>Desk {item.desk}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-3xl mb-3">Historial</h3>
          <ul className="space-y-3">
            {tickets?.slice(3).map((item) => (
              <li className="flex gap-3 py-3 border p-2" key={item.number}>
                <p>Ticket #{item.number}</p>
                <Tag className="bg-orange-500">{item.agent}</Tag>
                <Tag>Desk {item.desk}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Queue;
