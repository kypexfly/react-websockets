import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useUiContext } from "../context/UiContext";

const LoginPage = lazy(() => import("./Login"));
const QueuePage = lazy(() => import("./Queue"));
const CreatePage = lazy(() => import("./CreateTicket"));
const DeskPage = lazy(() => import("./Desk"));

const RouterPage = () => {
  const { isOpen, showMenu, hideMenu } = useUiContext();

  return (
    <Router>
      <div className="flex flex-row min-h-screen">
        <aside className="bg-slate-900 text-white w-52 hidden md:block">
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
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/queue" element={<QueuePage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/desk" element={<DeskPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default RouterPage;
