export default function Card({ children }) {
    return (
        <div className="card shadow p-4">
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}