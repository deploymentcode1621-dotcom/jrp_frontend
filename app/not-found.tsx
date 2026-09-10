import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="font-display text-6xl text-primary">404</p>
      <h1 className="mt-4 font-display text-2xl text-ink">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-light/70">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button href="/" className="mt-8" withArrow>
        Back to Home
      </Button>
    </div>
  );
}
