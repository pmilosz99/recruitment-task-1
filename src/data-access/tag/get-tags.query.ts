import { useQuery } from '@tanstack/react-query';
import { PromiseValue } from 'type-fest';

import { getPath } from '../../utils/getPath';
import { getHttpClient } from '../../shared/http-client';

import { paths } from '../../shared/const';

import { TQueryParams } from '../../shared/types';
import { queryKey } from './tags.query-key';

type TTag = {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

type TTags = {
  items: TTag[];
  total: number;
  has_more: boolean;
}

const getTags = async (queryParams?: TQueryParams): Promise<TTags> => {
  const res = await getHttpClient().get<TTags>(getPath(paths.tags, queryParams));

  return res.data;
};

export const useTags = (queryParams?: TQueryParams) => {
  return useQuery<PromiseValue<ReturnType<typeof getTags>>>({
    queryKey: queryKey.TAGS(queryParams),
    queryFn: () => getTags(queryParams),
  });
};
