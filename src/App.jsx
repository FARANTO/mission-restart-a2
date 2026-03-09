import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import TicketCard from './components/ticketcard/TicketCard';
import TicketStatus from './components/ticketstatus/TicketStatus';
import ticketsData from './data/tickets.json'; // Import fake JSON
import Footer from "./components/footer/footer";

function App() {
  // Variables
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  // Variables

  // Handlers
  const handleStartProgress = (id) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id && ticket.status === 'Open' 
        ? { ...ticket, status: 'In Progress' } 
        : ticket
    ));
    setInProgressCount(inProgressCount + 1);
    toast.success('Ticket added to In-Progress!');
  };

  const handleComplete = (id) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id && ticket.status === 'In Progress' 
        ? { ...ticket, status: 'Resolved' } 
        : ticket
    ));
    setInProgressCount(inProgressCount - 1);
    setResolvedCount(resolvedCount + 1);
    toast.success('Ticket marked as Resolved!');
  };

  // Filtered lists
  const allTickets = tickets; // Left grid shows all
  const inProgressTickets = tickets.filter(t => t.status === 'In Progress');
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved');


  return (
    <>
      <Navbar  />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

<div className="main-section">

  <div className="tickets-area">

    <h2 className="tickets-title">Customer Tickets</h2>

    <div className="tickets-grid">
      {allTickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onStartProgress={handleStartProgress}
        />
      ))}
    </div>

  </div>

  <TicketStatus
    inProgressTickets={inProgressTickets}
    resolvedTickets={resolvedTickets}
    onComplete={handleComplete}
  />

</div>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;