import sessions from "@/data/sessions.json";

export interface Session {
  code: string;
  target: string;
  path: string;
  expires: string;
  label: string;
  active: boolean;
}

export type SessionStatus = "valid" | "expired" | "invalid";

export interface SessionResult {
  status: SessionStatus;
  session?: Session;
}

export function getSession(code: string): SessionResult {
  const session = (sessions as Session[]).find((s) => s.code === code);

  if (!session || !session.active) {
    return { status: "invalid" };
  }

  const now = new Date();
  const expiresAt = new Date(session.expires);

  if (now > expiresAt) {
    return { status: "expired", session };
  }

  return { status: "valid", session };
}
