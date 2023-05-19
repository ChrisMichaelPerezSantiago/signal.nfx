import { describe, expect, it } from "vitest";
import { getInvestors } from "../dist";

describe("should", () => {
  it("be object and not empty", async () => {
    const id = "top-biotech-pre-seed-investors";
    const result = await getInvestors(id);

    expect(typeof result).toBe("object");
    expect(result).not.toBeNull(); // Check if the result is not null
    expect(Object.keys(result).length).toBeGreaterThan(0); // Check if the result has at least one property
  });
});
