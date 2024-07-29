import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useReroute(path: string, condition : boolean) {
  const router = useRouter();

  useEffect(() => {
    if (condition) {
      router.push(path);
    }
  }, [condition, path, router]);
}
