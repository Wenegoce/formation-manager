const crypto = require("crypto");

module.exports = async function (context, req) {
  const { formationId, stagiaireId } = req.body || {};
  const expires = Math.floor(Date.now() / 1000) + 7 * 24 * 3600; // 7 jours
  const key = process.env.SIGNING_KEY;

  if (!formationId || !stagiaireId) {
    context.res = { status: 400, body: "Champs manquants." };
    return;
  }

  const data = `${formationId}.${stagiaireId}.${expires}`;
  const sig = crypto.createHmac("sha256", key).update(data).digest("hex");

  const url = `https://app.formation-manager.wenegoce.fr/?fid=${formationId}&stid=${stagiaireId}&exp=${expires}&sig=${sig}`;
  context.res = { status: 200, body: { url } };
};
