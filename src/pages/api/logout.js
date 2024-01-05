import { unsetAuthCookies } from "@/src/lib/auth/cookies/unsetAuthCookies"

const handler = async (req, res) => {
  try {
    console.log("In logout function")
    await unsetAuthCookies(req, res)
    return res.status(200).json({ success: true })
  } catch (e) {
    return res.status(500).json({ error: "Unexpected error." })
  }
}

export default handler //withSentry(handler);
