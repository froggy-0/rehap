import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-text-secondary">페이지를 찾을 수 없습니다</p>
      <Button asChild className="mt-8 min-h-[44px]">
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  );
}
