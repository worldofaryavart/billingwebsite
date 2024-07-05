import { Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import Landing from "@/Components/Landing";
import { Inertia } from "@inertiajs/inertia";
import { useEffect } from "react";
import Dashboard from "@/Pages/Dashboard"; // Import your Dashboard component

export default function Welcome({ auth }) {
    useEffect(() => {
        if (auth.user) {
            Inertia.visit(route("dashboard"));
        }
    }, [auth.user]);

    if (auth.user) {
        return <Dashboard />; // Render the Dashboard component directly
    }

    return (
        <>
            <Head title="Welcome" />
            <Guest>
                <div>
                    <Landing />
                </div>
            </Guest>
        </>
    );
}