import { Router } from "https://deno.land/x/oak/mod.ts";

import { getPerson } from './controller.ts'

const router = new Router();
router
  .get("/about", ({ response }: { response: any }) => {
        response.body = "hello default!"
  })
  .get("/person",getPerson)

export default router;
