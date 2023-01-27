export default function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    const { email, eventId } = req.body;

    //! sending response
    res.status(200).json({
      message: `You successfully registered with email: ${email}`,
    });
  }
}
