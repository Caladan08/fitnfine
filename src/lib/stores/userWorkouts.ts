import { writable } from "svelte/store";
import type { ExerciseDataType } from "$lib/types";

export const userWorkoutDataStore = writable<ExerciseDataType[]>([]);
