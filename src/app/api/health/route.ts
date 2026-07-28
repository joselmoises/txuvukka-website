/** Sonda de liveness para o Docker / Nginx Proxy Manager / monitores de uptime. */
export const dynamic = "force-dynamic";

export function GET() {
  return new Response("ok", {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
}
