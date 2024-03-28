import { TQueryParams } from "../../shared/types";

enum QUERY_KEY {
    TAGS = 'tags',
}
  
export const queryKey = {
    TAGS: (queryParams?: TQueryParams) => queryParams ? [QUERY_KEY.TAGS, queryParams] : [QUERY_KEY.TAGS],
};