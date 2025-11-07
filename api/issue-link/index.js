const crypto = require("crypto");

module.exports = async function (context, req) {
  try {
    // ✅ Accepte POST (JSON body) ou GET (query string)
    const formationId = req.body?.formationId || req.query?.fid;
    const stagiaireId = req.body?.stagiaireId || req.query?.stid;

    if (!formationId || !stagiaireId) {
      context.res = { status: 400, body: "Champs manquants." };
      return;
    }

    const key = process.env.SIGNING_KEY;
    if (!key) {
      context.res = { status: 500, body: "Configuration manquante : SIGNING_KEY" };
      return;
    }

    // Durée de validité : 7 jours
    const expires = Math.floor(Date.now() / 1000) + 7 * 24 * 3600;
    const data = `${formationId}.${stagiaireId}.${expires}`;
    const sig = crypto.createHmac("sha256", key).update(data).digest("hex");

    const url = `https://app.formation-manager.wenegoce.fr/?fid=${encodeURIComponent(
      formationId
    )}&stid=${encodeURIComponent(stagiaireId)}&exp=${expires}&sig=${sig}`;

    // ✅ Réponse JSON explicite
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { url },
    };
  } catch (err) {
    context.log.error("Erreur issue-link :", err);
    context.res = { status: 500, body: "Erreur interne du serveur." };
  }
};
