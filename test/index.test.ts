import { describe, expect, it } from "vitest";
import { getInvestors, getFirms } from "../dist";

describe("should", () => {
  it("[INVESTORS] be object and not empty", async () => {
    const id = "top-biotech-pre-seed-investors";
    const result = await getInvestors(id);

    expect(typeof result).toBe("object");
    expect(result).not.toBeNull();
    expect(Object.keys(result).length).toBeGreaterThan(0);
  });

  it("[FIRMS] be object and not empty", async () => {
    const id = "01-advisors";
    const result = await getFirms(id);

    expect(typeof result).toBe("object");
    expect(result).not.toBeNull();
    expect(Object.keys(result).length).toBeGreaterThan(0);
  });
});
