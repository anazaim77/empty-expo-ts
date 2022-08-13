import { ApiEndpoint, QueryKeys } from "@/constants";
import { ApiRequestUtils } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface ResponsePost {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface RequestPost {
  userId: number;
  title: string;
  body: string;
}

export const useGetPosts = () =>
  useQuery(QueryKeys.GET_POSTS, () =>
    ApiRequestUtils.get<Array<ResponsePost>>(ApiEndpoint.POSTS)
  );

export const useSendPosts = () =>
  useMutation((data: RequestPost) =>
    ApiRequestUtils.post<ResponsePost>(ApiEndpoint.POSTS, data)
  );
