import clsx from "clsx";
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useUiContext } from "../hooks/useUiContext";

import CreatePage from "./CreateTicket";
import LoginPage from "./Login";
import QueuePage from "./Queue";
import DeskPage from "./Desk";

const RouterPage = () => {
  const { isOpen } = useUiContext();

  return (
    <Router>
      <div className="flex flex-row min-h-screen">
        <aside className={clsx("bg-slate-900 text-white w-52", isOpen ? "block" : "hidden")}>
          <ul>
            <li>
              <Link className="block px-8 py-4 hover:bg-slate-800" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4 hover:bg-slate-800" to="/queue">
                Queue
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4 hover:bg-slate-800" to="/create">
                Create Ticket
              </Link>
            </li>
          </ul>
        </aside>

        <main className="grow bg-slate-200 p-2 sm:p-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/queue" element={<QueuePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/desk" element={<DeskPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default RouterPage;
