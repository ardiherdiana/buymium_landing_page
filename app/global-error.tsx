'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Check if the error is a ChunkLoadError
        if (error.message.includes('ChunkLoadError') || error.message.includes('Loading chunk')) {
            // Force a hard reload to fetch fresh chunks
            window.location.reload();
        }
    }, [error]);

    return (
        <html>
            <body>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Sorry, something went wrong!</h2>
                    <p style={{ marginBottom: '24px', color: '#666' }}>
                        We encountered a temporary issue. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#0070f3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 500
                        }}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
