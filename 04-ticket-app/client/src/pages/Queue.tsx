import Container from "../components/Container";
import { useHideMenu } from "../hooks/useHideMenu";
import { cn } from "../utils/cn";

type QueueData = {
  ticketNo: number;
  desk: number;
  agent: string;
};

const data: QueueData[] = [
  {
    ticketNo: 33,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    desk: 4,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 35,
    desk: 5,
    agent: "Carlos Castro",
  },
  {
    ticketNo: 36,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    desk: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    desk: 2,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 39,
    desk: 5,
    agent: "Carlos Castro",
  },
];

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

  return (
    <Container>
      <div className="mb-3">
        <h2 className="font-bold text-3xl mb-3">Attending client</h2>
        <p>Enter your agent name and desk number to login to the system.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <ul className="space-y-3">
            {data.slice(0, 2).map((item) => (
              <li className="flex gap-3 py-3 border" key={item.ticketNo}>
                <Tag className="text-3xl bg-transparent text-black">#{item.ticketNo}</Tag>
                <Tag className="bg-orange-500">{item.agent}</Tag>
                <Tag>Desk {item.desk}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-3xl mb-3">Historial</h3>
          <ul className="space-y-3">
            {data.map((item) => (
              <li className="flex gap-3 py-3 border p-2" key={item.ticketNo}>
                <p>Ticket #{item.ticketNo}</p>
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
