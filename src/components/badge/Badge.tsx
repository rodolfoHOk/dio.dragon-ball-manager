type BadgeProps = {
  type: 'success' | 'danger';
  label: string;
};

export function Badge({ type, label }: BadgeProps) {
  return (
    <div
      className={`px-2 py-1 flex items-center justify-center rounded-md ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`}
    >
      <span className="text-zinc-50 font-bold">{label}</span>
    </div>
  );
}
