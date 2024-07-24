import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';
import { GithubIssueState } from '../interfaces';
import { useEffect, useState } from 'react';

interface UseIssuesProps {
  state: GithubIssueState;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: UseIssuesProps) => {
  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60,
  });

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;

    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [selectedLabels]);

  return {
    issuesQuery,

    // ? Properties
    page,

    // ? Methods
    nextPage,
    prevPage,
  };
};
