import * as z from "zod";

export const formSchemaSettingAI = z.object({
  OPENAI_API_KEY: z.string().min(1, {
    message: "A new API key is required!!!",
  }),
});

export const formSchemaSettingReplicate = z.object({
  REPLICATE_API_TOKEN: z.string().min(1, {
    message: "A new API token is required!!!",
  }),
});
