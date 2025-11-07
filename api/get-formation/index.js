const crypto = require("crypto");

function safeEqual(a, b) {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

module.exports = async function (context, req) {
  try {
    const q = req.query || {};
    const fid = q.fid;
    const stid = q.stid;
    const exp = Number(q.exp);
    const sig = q.sig;

    if (!fid || !stid || !exp || !sig) {
      context.res = { status: 400, body: "Paramètres manquants." };
      return;
    }

    if (Date.now() / 1000 > exp) {
      context.res = { status: 410, body: "Lien expiré." };
      return;
    }

    const key = process.env.SIGNING_KEY;
    if (!key) {
      context.res = { status: 500, body: "Configuration manquante : SIGNING_KEY" };
      return;
    }

    const data = `${fid}.${stid}.${exp}`;
    const check = crypto.createHmac("sha256", key).update(data).digest("hex");

    if (!safeEqual(sig, check)) {
      context.res = { status: 401, body: "Signature invalide." };
      return;
    }

    // À ce stade : lien OK ✅
    // Plus tard tu pourras ici : interroger SharePoint / Graph, etc.
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { ok: true, fid, stid, exp },
    };
  } catch (e) {
    context.log.error("get-formation error:", e);
    context.res = { status: 500, body: "Erreur interne du serveur." };
  }
};
