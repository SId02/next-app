import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-indigo-200 via-purple-400 to-pink-200 flex flex-col items-center justify-center">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-gray-900">
          NEXT.JS 15 With TypeScript
        </h1>
        <div className="flex gap-4">
          <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next.js Docs
            </button>
          </Link>
          <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Tailwind CSS Docs
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}