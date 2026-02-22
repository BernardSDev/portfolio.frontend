"use client"

import {useRouter} from "next/navigation"
import BackButton from "@/components/BackButton/BackButton";

export default function ContactPage() {
    const router = useRouter()

    return(
        <main className="bg-background flex items-center justify-center">
            <div className="w-full max-w-3xl bg-background">
                <BackButton onClick={() => router.back()} />

                <h1 className="text-2xl font-medium text-foreground mb-8 mt-8">
                    Contact Me
                </h1>

                <form className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="text-sm text-foreground"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full bg-transparent border border-gray-500/50 rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm text-foreground"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent border border-gray-500/50 rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-sm text-foreground"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={7}
                            placeholder="Write your message..."
                            className="w-full bg-transparent border border-border rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary resize-none transition"
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