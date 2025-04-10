import axios from "axios";

const WIX_CLEANUP_URL = "https://rekinyfilmowe.pl/_functions/cleanup?secret=tajnyTOKEN123";

async function runCleanup() {
  try {
    const res = await axios.get(WIX_CLEANUP_URL);
    console.log("✅ Cleanup done:", res.data);
  } catch (err) {
    console.error("❌ Cleanup failed:", err.message);
  }
}

runCleanup();
