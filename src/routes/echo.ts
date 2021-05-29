import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ headers, rawBody }) => {
  return {
    headers: { "content-type": headers["content-type"] },
    body: rawBody,
  };
};
