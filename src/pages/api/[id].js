import React from "react";
import fs from "fs";

export default function Random(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    const fileEncoding = "utf-8";
    const dados = fs.readFileSync("fila.json", fileEncoding);

    res.status(200).json({ data });
  }
}

export async function getStaticProps(context) {
  return {
    props: { post: {} },
  };
}
