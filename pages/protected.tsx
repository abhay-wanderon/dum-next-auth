import { withAuth } from "next-auth/middleware"
import { useSession } from "next-auth/react"

function ProtectedPage() {
    const { data: session } = useSession()

    if (!session) {
        return <p>Access Denied</p>
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome {session?.user?.name}</p>
        </div>
    )
}

export default ProtectedPage