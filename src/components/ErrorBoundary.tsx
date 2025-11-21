"use client"

import { Component, ReactNode } from "react"
import { AlertTriangle } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    console.error("ErrorBoundary caught an error:", error, errorInfo)

    // You can also log to an error reporting service here
    // Example: Sentry.captureException(error)
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center px-4 py-16 text-center">
          <div className="mx-auto max-w-md">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-red-100 p-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Une erreur est survenue
            </h2>
            <p className="mb-6 text-base text-slate-600">
              Nous sommes désolés, une erreur inattendue s'est produite. Veuillez rafraîchir la page ou réessayer plus tard.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-full bg-rad-blue-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-rad-blue-800 hover:shadow-xl"
            >
              Rafraîchir la page
            </button>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-6 rounded-lg bg-slate-100 p-4 text-left">
                <summary className="cursor-pointer font-mono text-xs text-slate-700">
                  Détails de l'erreur (dev only)
                </summary>
                <pre className="mt-2 overflow-auto text-xs text-red-600">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
