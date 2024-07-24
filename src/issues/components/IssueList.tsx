import { GithubIssueState } from '../interfaces';
import { GithubIssue } from '../interfaces';
import { IssueItem } from './IssueItem';

interface IssueListProps {
  issues: GithubIssue[];
  state: GithubIssueState;
  onStateChange: (githubIssueState: GithubIssueState) => void;
}

export const IssueList = ({ issues, onStateChange, state }: IssueListProps) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          className={`btn ${state === GithubIssueState.All ? 'active' : ''}`}
          onClick={() => onStateChange(GithubIssueState.All)}
        >
          All
        </button>
        <button
          className={`btn ${state === GithubIssueState.Open ? 'active' : ''}`}
          onClick={() => onStateChange(GithubIssueState.Open)}
        >
          Open
        </button>
        <button
          className={`btn ${state === GithubIssueState.Close ? 'active' : ''}`}
          onClick={() => onStateChange(GithubIssueState.Close)}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
