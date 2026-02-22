"use client"

import {useRouter} from "next/navigation"
import BackButton from "@/components/BackButton/BackButton";

export default function ContactPage() {
    const router = useRouter()

    return(
        <main className="min-h-screen bg-background flex items-center justify-center">
            <div className="w-full max-w-3xl bg-background">
                <BackButton onClick={() => router.back()} />

                <h1 className="text-2xl font-medium text-primary mb-8">
                    Contact Me
                </h1>

                <form className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-300">Name</label>
                        <input
                            className="w-full bg-transparent border border-gray-500/50 rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary transition"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border border-gray-500/50 rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary transition"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-300">Message</label>
                        <textarea
                            rows={7}
                            className="w-full bg-transparent border border-gray-500/50 rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary resize-none transition"
                            placeholder="Write your message..."
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="bg-primary  transition px-8 py-4 rounded-2xl text-white text-lg w-fit shadow-md cursor-pointer"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}