import { useInfiniteQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';
import { GithubIssueState } from '../interfaces';

interface UseIssuesProps {
  state: GithubIssueState;
  selectedLabels: string[];
}

export const useIssuesInfinite = ({
  state,
  selectedLabels,
}: UseIssuesProps) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: ['issues', 'infinite', { state, selectedLabels }],
    queryFn: ({ pageParam, queryKey }) => {
      const [, , args] = queryKey;
      const { state, selectedLabels } = args as UseIssuesProps;

      return getIssues(state, selectedLabels, pageParam);
    },
    staleTime: 1000 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
  });

  return {
    issuesQuery,
  };
};
