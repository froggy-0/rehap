import type { WorkbookItem } from "@/types/content";

export function validateWorkbook(workbook: any): string[] {
  const errors: string[] = [];

  // 필수 필드 검증
  if (!workbook.id) errors.push("id 필수");
  if (!workbook.title) errors.push("title 필수");
  if (!workbook.subtitle) errors.push("subtitle 필수");
  if (!workbook.description) errors.push("description 필수");
  if (!workbook.category) errors.push("category 필수");

  // 가격 검증
  if (!workbook.price || typeof workbook.price !== "number" || workbook.price <= 0) {
    errors.push("price는 0보다 큰 숫자여야 함");
  }
  if (!workbook.priceDisplay) errors.push("priceDisplay 필수");

  // 할인가 검증 (선택적)
  if (workbook.discountPrice) {
    if (typeof workbook.discountPrice !== "number") {
      errors.push("discountPrice는 숫자여야 함");
    } else if (workbook.discountPrice >= workbook.price) {
      errors.push("discountPrice는 price보다 작아야 함");
    }
  }

  // features 검증
  if (!workbook.features || !Array.isArray(workbook.features)) {
    errors.push("features는 배열이어야 함");
  } else if (workbook.features.length === 0) {
    errors.push("features는 최소 1개 필요");
  } else if (workbook.features.length > 6) {
    errors.push("features는 최대 6개까지 권장");
  }

  // 이미지 검증
  if (!workbook.coverImage) errors.push("coverImage 필수");
  if (!workbook.previewImages || !Array.isArray(workbook.previewImages)) {
    errors.push("previewImages는 배열이어야 함");
  } else if (workbook.previewImages.length === 0) {
    errors.push("previewImages는 최소 1개 필요");
  }

  // URL 검증
  if (!workbook.applicationUrl) {
    errors.push("applicationUrl 필수");
  } else if (!workbook.applicationUrl.startsWith("http")) {
    errors.push("applicationUrl은 http(s)로 시작해야 함");
  }

  return errors;
}

export function validateWorkbooksData(data: any): {
  valid: boolean;
  errors: Array<{ index: number; id: string; errors: string[] }>;
} {
  const errors: Array<{ index: number; id: string; errors: string[] }> = [];

  if (!data.items || !Array.isArray(data.items)) {
    return { valid: false, errors: [{ index: -1, id: "N/A", errors: ["items 배열이 없음"] }] };
  }

  data.items.forEach((item: any, index: number) => {
    const itemErrors = validateWorkbook(item);
    if (itemErrors.length > 0) {
      errors.push({
        index,
        id: item.id || "N/A",
        errors: itemErrors,
      });
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}
