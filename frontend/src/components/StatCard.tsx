type StatCardProps = {
    number: string;
    label: string;
};

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className = "stat-card">
        <h1>{number}</h1>
        <p>{label}</p>
    </div>
  );
}

export default StatCard;