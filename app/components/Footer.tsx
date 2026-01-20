export function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Faithful & True Brew. All rights reserved.
        </p>
        <p className="text-sm text-amber-300">
          Bringing exceptional coffee to your community with faith and dedication.
        </p>
      </div>
    </footer>
  );
}
