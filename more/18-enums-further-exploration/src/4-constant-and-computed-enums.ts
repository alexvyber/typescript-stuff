const enum GitRepo {
  NotCommitted,
  Committed = 5 + 2,
}

function isRepoCommitted(repo: GitRepo): boolean {
  return repo === null || repo === GitRepo.Committed
}

let gitCommit = isRepoCommitted(GitRepo.Committed)
console.log(gitCommit)
