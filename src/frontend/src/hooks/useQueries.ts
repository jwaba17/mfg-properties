import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";

export type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
};

export function useSubmitQuote() {
  const { actor } = useActor(createActor);

  return useMutation<{ ok: boolean; error?: string }, Error, QuotePayload>({
    mutationFn: async (payload: QuotePayload) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitQuote(payload);
    },
  });
}
