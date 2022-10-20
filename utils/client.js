import Medusa from "@medusajs/medusa-js"

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_URL || "https://fakebazaar-medusajs.herokuapp.com"

export const createClient = () => new Medusa({ baseUrl: BACKEND_URL })
