import { useQuery } from '@tanstack/react-query';

// ? Actions
import { getLabels } from '../actions/get-labels';
import { GithubLabel } from '../interfaces';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hora,
    refetchOnWindowFocus: false,

    // placeholderData: [
    //   {
    //     id: 1109410193,
    //     node_id: 'MDU6TGFiZWwxMTA5NDEwMTkz',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Hooks',
    //     name: 'Component: Hooks',
    //     color: 'c2f27b',
    //     default: false,
    //   } satisfies GithubLabel,
    //   {
    //     id: 6955781886,
    //     node_id: 'LA_kwDOAJy2Ks8AAAABnpjO_g',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Compiler:%20todo',
    //     name: 'Compiler: todo',
    //     color: 'C2E0C6',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
    // initialData: [
    //   {
    //     id: 1109410193,
    //     node_id: 'MDU6TGFiZWwxMTA5NDEwMTkz',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Hooks',
    //     name: 'Component: Hooks',
    //     color: 'c2f27b',
    //     default: false,
    //   } satisfies GithubLabel,
    //   {
    //     id: 6955781886,
    //     node_id: 'LA_kwDOAJy2Ks8AAAABnpjO_g',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Compiler:%20todo',
    //     name: 'Compiler: todo',
    //     color: 'C2E0C6',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });

  return {
    labelsQuery,
  };
};
