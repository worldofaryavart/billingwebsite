import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import Landing from "@/Components/Landing";

export default function Welcome({ auth }) {
    console.log("auth.user is ", auth.user);
    return (
        <>
            <h1>This is first page</h1>
            <Head title="Welcome" />
            {auth.user ? (
                <div className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                    <Link
                        href={route("dashboard")}
                        // className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Billing Website
                    </Link>
                </div>
            ) : (
            <Guest>
                <div>
                    {/* <Link
                            href={route("login")}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-black/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route("register")}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-black/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                        <footer className="py-16 text-center text-sm text-white dark:text-white/70">
                            Billing Website &copy; 2024
                        </footer> */}
                    <Landing />
                </div>
            </Guest>
            )}
        </>
    );
}
