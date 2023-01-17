import { vi } from "vitest";

if (!global.fetch) {
  global.fetch = vi.fn();
}

vi.spyOn(console, "error").mockImplementation(() => null);
