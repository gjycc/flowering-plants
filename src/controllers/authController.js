import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { email, password } = req.body ?? {};

    if (!email || !password) {
        return res.status(422).json({
            error: "Se requieren Email y contraseña"
        });
  }
    if (email !== process.env.DEMO_EMAIL || password !== process.env.DEMO_PASSWORD) {
        return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  
  };