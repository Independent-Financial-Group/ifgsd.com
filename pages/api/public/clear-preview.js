import Router from "next/router";

export default function handler(req, res) {
  const { path } = req.query;

  res.clearPreviewData({});
  res.setDraftMode({ enable: false });
  path.includes("app") ? res.redirect("/app") : res.redirect("/");
}
