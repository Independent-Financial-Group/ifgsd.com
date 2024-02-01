import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

export default function handler(req, res) {
  const { slug } = req.query;
  res.setPreviewData({});
  res.setDraftMode({ enable: true });

  const headers = res.getHeader("Set-Cookie");
  if (Array.isArray(headers)) {
    res.setHeader(
      "Set-Cookie",
      headers.map((cookie) => {
        if (cookie.includes(COOKIE_NAME_PRERENDER_BYPASS)) {
          return cookie.replace("SameSite=Lax", "SameSite=None; Secure");
        }
        return cookie;
      }),
    );
  }

  res.redirect(slug);
}
