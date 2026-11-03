// Xiang Xiang queue-links site — own submission endpoint (Cloudflare Pages Function).
// Receives queue-link submissions from the site's form and stores them in the
// KV namespace bound as SUBMISSIONS. No third-party form service is involved.

const ALLOWED_OUTLETS = [
  "Chinatown",
  "Suntec City",
  "Pasir Ris Mall",
  "Lot One",
  "Compass One",
  "Hougang Mall",
  "Mandai Zoo",
];

const LINK_PATTERN = /^https:\/\/inline\.app\/\S+\/waiting\/?$/;

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return json({ success: false, message: "Invalid request." }, 400);
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success.
  if (data.website) return json({ success: true });

  const outlet = String(data.outlet || "").trim();
  const link = String(data.queue_link || "").trim();
  const name = String(data.submitted_by || "").trim().slice(0, 80);

  if (!ALLOWED_OUTLETS.includes(outlet)) {
    return json({ success: false, message: "Unknown outlet." }, 400);
  }
  if (!LINK_PATTERN.test(link)) {
    return json(
      {
        success: false,
        message:
          "That doesn't look like an inline.app queue link — it should start with https://inline.app/ and end with /waiting.",
      },
      400
    );
  }
  if (!env.SUBMISSIONS) {
    return json(
      { success: false, message: "Submission storage is not configured yet." },
      500
    );
  }

  const receivedAt = new Date().toISOString();
  const key = receivedAt + " — " + outlet;
  const record = {
    outlet: outlet,
    queue_link: link,
    submitted_by: name || "(not given)",
    received_at: receivedAt,
    country: request.headers.get("CF-IPCountry") || "",
  };
  await env.SUBMISSIONS.put(key, JSON.stringify(record));

  return json({ success: true });
}

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return json({ success: false, message: "Method not allowed." }, 405);
  }
  return onRequestPost(context);
}
