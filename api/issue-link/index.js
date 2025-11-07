const crypto = require("crypto");

module.exports = async function (context, req) {
  try {
    // --- Lecture robuste des paramètres (GET ou POST, v3 ou v4) ---
    let formationId, stagiaireId;

    if ((req.method || "").toUpperCase() === "GET") {
      const q = req.query || {};
      // v3: q.fid ; v4 (éventuel): q.get('fid')
      formationId = q.fid ?? (typeof q.get === "function" ? q.get("fid") : undefined);
      stagiaireId = q.stid ?? (typeof q.get === "function" ? q.get("stid") : undefined);
    } else {
      // POST JSON
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

    const expires = Math.floor(Date.now() / 1000) + 7 * 24 * 3600; // 7 jours
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
