import Nav from "@/app/componets/Nav";
import PhotoGrid from "@/app/componets/PhotoGrid";
import PhotoUploader from "@/app/componets/PhotoUploader";
import SignOutButton from "@/app/componets/SignOutButton";

export default function Photos(){
    return (
    <main className="min-h-screen bg-gray-800 text-white relative p-10">
        <Nav />
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col items-center mb-6">
                <h1 className="text-4xl font-bold mb-4">Photos</h1>
                <PhotoUploader />
                </div>
                <PhotoGrid />
            </div>
            <div className="absolute top-4 right-4">
                <SignOutButton />
            </div>
    </main>
    )
}