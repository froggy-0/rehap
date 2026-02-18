import type {
  SiteConfig,
  WorkbooksData,
  ReviewsData,
  FAQData,
  HomeContent,
} from "@/types/content";
import configData from "../../content/config.json";
import workbooksData from "../../content/workbooks.json";
import reviewsData from "../../content/reviews.json";
import faqData from "../../content/faq.json";
import homeData from "../../content/home.json";
import { validateWorkbooksData } from "./validateWorkbook";

function getDefaultConfig(): SiteConfig {
  return {
    siteName: "JHAP",
    siteUrl: "https://jhap.com",
    ogImage: "/images/og-image.svg",
    brand: {
      name: "JHAP",
      tagline: "운동생리학 학습 플랫폼",
      description: "운동생리학 학습을 위한 플랫폼",
      story: "",
      ceo: { name: "", displayName: "", title: "", message: "" },
      values: [],
    },
    applicationForm: { url: "#", buttonText: "신청하기" },
    contact: { email: "" },
    sns: {},
    feedbackForm: { url: "#", buttonText: "문의하기", description: "" },
  };
}

export function getSiteConfig(): SiteConfig {
  try {
    const config = configData as SiteConfig;
    if (!config.siteName || !config.brand) {
      throw new Error("Invalid config structure");
    }
    return config;
  } catch (error) {
    console.error("Failed to load site config:", error);
    return getDefaultConfig();
  }
}

export function getWorkbooksData(): WorkbooksData {
  try {
    const data = workbooksData as WorkbooksData;
    if (!data.categories || !data.items) {
      throw new Error("Invalid workbooks data");
    }

    // 개발 모드에서만 검증
    if (process.env.NODE_ENV === "development") {
      const validation = validateWorkbooksData(data);
      if (!validation.valid) {
        console.warn("⚠️ 문제집 데이터 검증 실패:");
        validation.errors.forEach(({ index, id, errors }) => {
          console.warn(`  문제집 [${index}] (${id}):`, errors);
        });
      } else {
        console.log("✅ 문제집 데이터 검증 성공:", data.items.length, "개");
      }
    }

    return data;
  } catch (error) {
    console.error("Failed to load workbooks data:", error);
    return { categories: ["전체"], items: [] };
  }
}

export function getReviewsData(): ReviewsData {
  try {
    const data = reviewsData as ReviewsData;
    if (!data.items) {
      throw new Error("Invalid reviews data");
    }
    return data;
  } catch (error) {
    console.error("Failed to load reviews data:", error);
    return { items: [] };
  }
}

export function getFAQData(): FAQData {
  try {
    const data = faqData as FAQData;
    if (!data.items) {
      throw new Error("Invalid FAQ data");
    }
    return data;
  } catch (error) {
    console.error("Failed to load FAQ data:", error);
    return { items: [] };
  }
}

export function getHomeContent(): HomeContent {
  try {
    const data = homeData as HomeContent;
    if (!data.fitCheck || !data.studyMethod) {
      throw new Error("Invalid home content");
    }
    return data;
  } catch (error) {
    console.error("Failed to load home content:", error);
    return {
      fitCheck: {
        title: "",
        recommendedTitle: "",
        notRecommendedTitle: "",
        recommended: [],
        notRecommended: [],
      },
      studyMethod: { title: "", subtitle: "", steps: [] },
      trustPolicy: {
        title: "",
        subtitle: "",
        notice: [],
        details: [],
      },
      urgency: { title: "", tag: "", messages: [], footnote: "" },
      preChecklist: { title: "", items: [] },
      brandMessage: { title: "", subtitle: "", bullets: [] },
      visual: {
        title: "",
        headline: "",
        tag: "",
        tracks: [],
        stats: [],
      },
    };
  }
}
