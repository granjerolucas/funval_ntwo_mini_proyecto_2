import { QueryClient } from "@tanstack/react-query";

let queryClient = null;

export default function getQueryCient() {
  if (!queryClient) {
    queryClient = new QueryClient();
  }
  return queryClient;
}
