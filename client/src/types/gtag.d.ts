export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      parameters?: Record<string, unknown>
    ) => void;
  }
}