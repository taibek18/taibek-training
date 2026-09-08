export const routineFiles = {
  "hombre-3-dias": "taibek_training_hombre_3_dias.pdf",
  "hombre-4-dias": "taibek_training_hombre_4_dias.pdf",
  "hombre-5-dias": "taibek_training_hombre_5_dias.pdf",
  "mujer-3-dias": "taibek_training_mujer_3_dias.pdf",
  "mujer-4-dias": "taibek_training_mujer_4_dias.pdf",
  "mujer-5-dias": "taibek_training_mujer_5_dias.pdf",
} as const;

export type RoutineProductId = keyof typeof routineFiles;