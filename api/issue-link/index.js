const crypto = require("crypto");

module.exports = async function (context, req) {
  try {
    // ✅ Compatibilité GET et POST (runtime v4)
    let formationId, stagiaireId;

    if (req.method === "GET") {
      formationId = req.query.get("fid");
      stagiaireId = req.query.get("stid");
    } else if (req.method === "POST") {
      formationId = req.body?.formationId;
      stagiaireId = req.body?.stagiaireId;
    }

    if (!formationId || !stagiaireId) {
      context.res = { status: 400, body: "Champs manquants." };
      return;
    }

    const key = process.env.SIGNING_KEY;
    if (!key) {
      context.res = { status: 500, body: "Configuration manquante : SIGNING_KEY" };
      return;
    }

    const expires = Math.floor(Date.now() / 1000) + 7 * 24 * 3600;
    const data = `${formationId}.${stagiaireId}.${expires}`;
    const sig = crypto.createHmac("sha256", key).update(data).digest("hex");

    const url = `https://app.formation-manager.wenegoce.fr/?fid=${encodeURIComponent(
      formationId
    )}&stid=${encodeURIComponent(stagiaireId)}&exp=${expires}&sig=${sig}`;

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { url },
    };
  } catch (err) {
    context.log.error("Erreur issue-link:", err);
    context.res = { status: 500, body: "Erreur interne du serveur." };
  }
};
