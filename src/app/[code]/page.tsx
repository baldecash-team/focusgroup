import { redirect } from "next/navigation";
import { getSession } from "@/lib/registry";
import { buildRedirectUrl } from "@/lib/token";
import RedirectLoader from "./redirect-loader";

export default async function CodePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const result = getSession(code);

  if (result.status === "invalid") {
    redirect("/invalid");
  }

  if (result.status === "expired") {
    redirect("/expired");
  }

  const session = result.session!;
  const redirectUrl = buildRedirectUrl(session.target, session.path, session.code);

  return <RedirectLoader url={redirectUrl} />;
}
