import { createReducer, on } from "@ngrx/store";
import { createItem } from "./items.actions";

export const initialState: ReadonlyArray<string> = [];

export const itemsReducer = createReducer(
    initialState,
    on(createItem, (state, {item}) => [...state, item])
)

