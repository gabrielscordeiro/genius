import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>

        <p>
            Dashboard page (Protected)
        </p>
            <UserButton
                afterSignOutUrl="/"
            />
        </div>
    )
}

export default DashboardPage;
