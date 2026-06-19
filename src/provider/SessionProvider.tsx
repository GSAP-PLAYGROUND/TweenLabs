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
  
  // If we receive an explicit initialSession from the server (either null or user object),
  // we don't need to block on isPending since we know the initial state.
  const hasInitialSession = initialSession !== undefined;
  
  const [session, setSession] = useState(initialSession);
  const [isPending, setIsPending] = useState(!hasInitialSession);

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
