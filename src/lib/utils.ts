import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * basePath를 포함한 절대 경로 생성
 * GitHub Pages 배포 시 필요
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_REPO_NAME 
    ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` 
    : '';
  return `${basePath}${path}`;
}
