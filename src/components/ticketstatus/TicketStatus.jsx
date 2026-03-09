import './TicketStatus.css';

function TicketStatus({ inProgressTickets, resolvedTickets, onComplete }) {
  return (
    <div className="ticket-status">
      <h2>Task Status</h2>
      {inProgressTickets.length === 0 ? (
        <p>Select a ticket to add to Task Status</p>
      ) : (
        inProgressTickets.map(ticket => (
          <div key={ticket.id} className="task-item">
            <span>{ticket.title}</span>
            <button onClick={() => onComplete(ticket.id)}>Complete</button>
          </div>
        ))
      )}

      <h2>Resolved Task</h2>
      {resolvedTickets.length === 0 ? (
        <p>No resolved tasks yet.</p>
      ) : (
        resolvedTickets.map(ticket => (
          <div key={ticket.id} className="resolved-item">
            <span>{ticket.title}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default TicketStatus;