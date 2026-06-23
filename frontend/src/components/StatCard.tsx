type StatCardProps = {
    number: string;
    label: string;
    color?: string;
};

function StatCard({ number, label, color = "#4ade80" }: StatCardProps) {
  return (
    <div className = "stat-card">
        <h1 className = "stat-number" style = {{ color: color}}>{number}</h1>
        <p className = "stat-label">{label}</p>
    </div>
  );
}

export default StatCard;