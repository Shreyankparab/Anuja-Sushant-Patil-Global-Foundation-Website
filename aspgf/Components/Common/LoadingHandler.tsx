"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, createContext, useContext, Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

// Define a context to manually start/stop the loader from any component
interface LoadingContextType {
    startLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const [isPending, setIsPending] = useState(false);

    // Initial mount behavior (to ensure page looks loaded)
    useEffect(() => {
        setIsPending(false);
        setIsLoading(false);
    }, [pathname]);

    // Delay showing the loader (200ms) to avoid flickering on fast pages (cached or pre-rendered)
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPending) {
            timer = setTimeout(() => {
                setIsLoading(true);
            }, 200);
        } else {
            setIsLoading(false);
        }
        return () => clearTimeout(timer);
    }, [isPending]);

    // Manual triggers
    const startLoading = useCallback(() => setIsPending(true), []);

    // Global click listener for link transitions
    const handleLinkClick = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = (target.tagName === "A" ? target : target.closest("a")) as HTMLAnchorElement;

        // Skip if not internal navigation or special click (command, etc.)
        if (
            anchor &&
            anchor.href &&
            anchor.target !== "_blank" &&
            !anchor.hasAttribute("download") &&
            !anchor.href.includes("#") &&
            !e.ctrlKey &&
            !e.metaKey &&
            !e.shiftKey &&
            !e.altKey
        ) {
            try {
                const url = new URL(anchor.href);
                if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
                    setIsPending(true);
                }
            } catch (err) {
                // Ignore invalid URLs
            }
        }
    }, [pathname]);

    useEffect(() => {
        document.addEventListener("click", handleLinkClick);
        return () => document.removeEventListener("click", handleLinkClick);
    }, [handleLinkClick]);

    return (
        <LoadingContext.Provider value={{ startLoading }}>
            {isLoading && <LoadingScreen />}
            {children}
        </LoadingContext.Provider>
    );
}

// Hook for manual triggers from components using router.push
export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) return { startLoading: () => { } }; // Fallback for outside provider
    return context;
};

// Original LoadingHandler for backward compatibility in Layout
export default function LoadingHandlerFallback() {
    return null; // Not needed if wrapped by Provider, but keeps RootLayout from breaking
}
