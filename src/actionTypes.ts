export const LIST_LOADING = "LIST_LOADING";
export const LIST_FAIL = "LIST_FAIL";
export const LIST_SUCCESS = "LIST_SUCCESS";

export type GameData = {
    id: ID,
    name: Name,
    intro_text: IntroText,
}

export type ID = {
  id: string
}

export type Name = {
    name: string
}

export type IntroText = {
  intro_text: string
}

export interface ListLoading {
  type: typeof LIST_LOADING
}

export interface ListFail {
  type: typeof LIST_FAIL
}

export interface ListSuccess {
  type: typeof LIST_SUCCESS,
  payload: GameData
}

export type GameDispatchTypes = ListLoading | ListFail | ListSuccess