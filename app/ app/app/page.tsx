export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Fantômes
      </p>
      <h1 className="mt-4 text-4xl font-extrabold leading-tight">
        Des abonnements que tu paies sans t&apos;en servir ? On les débusque.
      </h1>
      <p className="mt-4 text-lg text-stone-700">
        Dépose ton relevé bancaire : on repère les prélèvements oubliés et on
        écrit les lettres de résiliation pour toi.
      </p>
      <a
        href="#"
        className="mt-8 block rounded-xl bg-stone-900 px-6 py-4 text-center text-lg font-bold text-white"
      >
        Commencer, c&apos;est gratuit
      </a>
    </main>
  );
}
