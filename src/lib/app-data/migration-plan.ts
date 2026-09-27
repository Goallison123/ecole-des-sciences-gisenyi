/** Sort migration paths and return files not already applied. */
export function pendingMigrations(paths: string[], applied: string[]) {
  const completed = new Set(applied);
  return paths
    .map((path) => ({ path, name: path.split("/").at(-1) ?? path }))
    .filter(({ name }) => !completed.has(name))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function isMigrationFile(name: string): boolean {
  return /^\d+.*\.sql$/.test(name);
}
