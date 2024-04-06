import AuthForm from "@/app/componets/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">Welcome To Photo Store</h2>
        <p className="text-white mb-6 text-lg text-center">
         Sign In To Upload And Save Your Favorite Photos.
        </p>
        <AuthForm />
      </div>
    </main>
  )
}
