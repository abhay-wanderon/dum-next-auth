import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";

export function withAuth<P extends object>(WrappedComponent: NextComponentType<NextPageContext, any, P>) {
  return function ProtectedRoute(props: P) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const isUser = !!session?.user;
    const loading = status === "loading";

    useEffect(() => {
      if (!loading && !isUser) {
        router.push("/login");
      }
    }, [isUser, loading]);

    if (isUser) {
      return <WrappedComponent {...props} />;
    }

    return <div className="bg-red-200">Loading...</div>;
  };
}