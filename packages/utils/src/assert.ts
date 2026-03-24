/**
 * Asserts that a value is not null or undefined.
 * Throws an error at runtime if the assertion fails.
 */
export function assertDefined<T>(value: T | null | undefined, message?: string): T {
  if (value == null) {
    throw new Error(message ?? 'Expected value to be defined')
  }
  return value
}
