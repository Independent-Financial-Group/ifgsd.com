import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

export default function handler(req, res) {
  const { slug, contentType, topic, department } = req.query;
  res.setPreviewData({});
  res.setDraftMode({ enable: true });

  let pathPrefix;
  const createPath = () => {
    switch (contentType) {
      case "pressRelease":
        pathPrefix = "/press-and-media/press-releases/";
        break;
      case "marketCommentary":
        if (topic == "Metrics that Matter") {
          pathPrefix = "/app/portfolio-construction/market-commentary/MTM/";
        } else if (topic == "Portfolio Construction Research") {
          pathPrefix =
            "/app/portfolio-construction/market-commentary/portfolio-construction-research/";
        }
        break;
      case "education":
        if (department == "Information Technology") {
          pathPrefix = "/app/information-technology/education/";
        }
        break;
    }
  };

  createPath();

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
  console.log(`PREFIX: ${pathPrefix}`);
  console.log(`SLUG: ${slug}`);
  console.log(`FULL PATH: ${pathPrefix.concat(slug)}`);

  res.redirect(pathPrefix.concat(slug));
}
