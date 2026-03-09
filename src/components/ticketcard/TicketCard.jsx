import './TicketCard.css';

function TicketCard({ ticket, onStartProgress }) {
  const { id, title, description, customer, priority, status, createdAt } = ticket;
  const priorityColor = {
    High: 'high-priority',
    Medium: 'medium-priority',
    Low: 'low-priority',
  }[priority];
  const statusColor = {
    Open: 'open-status',
    'In Progress': 'progress-status',
    Resolved: 'resolved-status',
  }[status];

  const handleClick = () => {
    if (status === 'Open') onStartProgress(id);
  };

  return (
  <div
    className={`ticket-card ${status === 'Open' ? 'clickable' : ''}`}
    onClick={handleClick}
  >

    <div className="card-header">
      <h3 className="ticket-title">{title}</h3>
      <span className={`status-tag ${statusColor}`}>{status}</span>
    </div>

    <p className="ticket-description">{description}</p>

    <div className="card-footer">

      <div className="left-meta">
        <span className="ticket-id">#{id}</span>
        <span className={`priority-tag ${priorityColor}`}>{priority}</span>
      </div>

      <div className="right-meta">
        <span className="customer">{customer}</span>
        <span className="date">
          {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>

    </div>

  </div>
);
}

export default TicketCard;