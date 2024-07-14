import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"

function ProtectedPage() {

    const { data: session } = useSession()

    const handleLogout = async () => {
        await signOut({ redirect: false, callbackUrl: "/" })
    }

    if (!session) {
        return <p>Access Denied</p>
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <Button variant={"destructive"} onClick={handleLogout}>Logout</Button>
            <p>Welcome {JSON.stringify(session)}</p>
        </div>
    )
}

export default ProtectedPage