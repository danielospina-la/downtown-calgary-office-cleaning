export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-10">
        <p className="font-heading text-sm font-semibold text-white">
          Downtown Calgary Office Cleaning
        </p>
        <p className="text-xs text-steel">
          &copy; {new Date().getFullYear()} Downtown Calgary Office Cleaning.
          Serving downtown and surrounding communities.
        </p>
      </div>
    </footer>
  );
}
