/**
 * Validates that an unknown is a non null object
 * @param obj unknown
 * @returns true if obj is an object, false otherwise
 */
export function isObject(obj: unknown): obj is object {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

/**
 * Validates whether an unknown is null. 
 * It strictly checks for null, and undefined etc. will not 
 * return true in this check
 * @param obj unknown
 * @returns true if unknown is null, false otherwise
 */
export function isNull(obj: unknown): obj is null {
  return obj === null;
}
