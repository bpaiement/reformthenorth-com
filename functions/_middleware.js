export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname;

  if (host.endsWith(".pages.dev")) {
    return new Response(null, {
      status: 404,
      headers: { "x-robots-tag": "noindex, nofollow" },
    });
  }

  if (host === "www.reformthenorth.com") {
    url.hostname = "reformthenorth.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

