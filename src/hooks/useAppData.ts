"use client";

import { useMemo } from "react";
import {
  getSiteConfig,
  getWorkbooksData,
  getReviewsData,
  getFAQData,
  getHomeContent,
} from "@/lib/content";

export function useAppData() {
  const config = useMemo(() => getSiteConfig(), []);
  const workbooks = useMemo(() => getWorkbooksData(), []);
  const reviews = useMemo(() => getReviewsData(), []);
  const faq = useMemo(() => getFAQData(), []);
  const home = useMemo(() => getHomeContent(), []);

  return { config, workbooks, reviews, faq, home };
}
