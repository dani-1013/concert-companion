import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.join(
    __dirname,
    "../../serviceAccountKey.json"
);

const serviceAccount = JSON.parse(
    fs.readFileSync(serviceAccountPath, "utf-8")
);

const firebaseApp = getApps().length === 0
    ? initializeApp({
        credential: cert(serviceAccount)
    })
    : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);