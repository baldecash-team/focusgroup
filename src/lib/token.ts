import { createHmac } from "crypto";

const TOKEN_SECRET = process.env.TOKEN_SECRET || "dev-secret-change-me";

export function generateToken(code: string): { token: string; timestamp: string } {
  const timestamp = Date.now().toString();
  const payload = `${code}|${timestamp}`;
  const token = createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");

  return { token, timestamp };
}

export function buildRedirectUrl(
  target: string,
  path: string,
  code: string
): string {
  const { token, timestamp } = generateToken(code);
  const baseUrl = `${target}${path}`;
  const separator = baseUrl.includes("?") ? "&" : "?";

  return `${baseUrl}${separator}fg_token=${token}&fg_ts=${timestamp}&fg_code=${code}`;
}
