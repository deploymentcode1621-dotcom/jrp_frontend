import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "Nothing to show yet",
  description = "Check back soon — new content will appear here.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-primary-200 bg-primary-50/40 py-16 text-center">
      <Inbox className="h-8 w-8 text-primary-300" />
      <h3 className="font-display text-lg text-ink">{title}</h3>
      <p className="max-w-sm text-sm text-ink-light/70">{description}</p>
    </div>
  );
}
