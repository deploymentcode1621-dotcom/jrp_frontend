export default function Loader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-ink-light/60">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-200 border-t-primary" />
      <span className="text-sm">{label}…</span>
    </div>
  );
}
