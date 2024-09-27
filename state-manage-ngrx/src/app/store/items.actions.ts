import { createAction, props } from "@ngrx/store";

export const createItem = createAction(
    '[Item List] Create Item',
    props<{item: string}>()
)