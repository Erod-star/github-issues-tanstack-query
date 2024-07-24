import { useQuery } from '@tanstack/react-query';

// ? Actions
import { getIssue, getIssueComments } from '../actions';

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60,
    // retry: false,
  });

  // ? Integracion en paralelo
  // const commentsQuery = useQuery({
  //   queryKey: ['issues', issueNumber, 'comments'],
  //   queryFn: () => getIssueComments(issueNumber),
  //   staleTime: 1000 * 60,
  //   // retry: false,
  // });

  const issueNumberFromQuery = issueQuery.data?.number;

  // ? Integracion secuencial
  const commentsQuery = useQuery({
    queryKey: ['issues', issueNumberFromQuery, 'comments'],
    queryFn: () => getIssueComments(issueNumberFromQuery!),
    staleTime: 1000 * 60,
    // ! Esto es lo que cambia
    enabled: issueQuery.data !== undefined,
    // retry: false,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
