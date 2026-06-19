"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

interface SessionContextType {
  session: any;
  isPending: boolean;
  error: any;
}

const SessionContext = createContext<SessionContextType>({
  session: null,
  isPending: true,
  error: null,
});

export function SessionProvider({
  children,
  initialSession,
}: {
  children: React.ReactNode;
  initialSession: any;
}) {
  const { data: clientSession, isPending: clientPending, error } = authClient.useSession();
  
  const [session, setSession] = useState(initialSession);
  // Only set isPending to false if the server successfully resolved an active session.
  // If the server resolved null (or is undefined), wait for client-side confirmation.
  const [isPending, setIsPending] = useState(initialSession === null || initialSession === undefined);

  useEffect(() => {
    if (!clientPending) {
      setSession(clientSession);
      setIsPending(false);
    }
  }, [clientSession, clientPending]);

  return (
    <SessionContext.Provider value={{ session, isPending, error }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
