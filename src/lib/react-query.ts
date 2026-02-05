import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
  queries: { staleTime: 60 * 1000, retry: 1, refetchOnWindowFocus: false },
};
