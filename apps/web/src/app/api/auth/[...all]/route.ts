import { auth, toNextJsHandler } from "@guild0/auth";

export const { GET, POST } = toNextJsHandler(auth);
