type Task = {
  id: string;
  title: string;
  user?: User["id"];
  column?: StatusColumn["id"];
};

type Id = "some";
type Some = User;
type Other = User[User["someShit"]];

type User = {
  id: string;
  someShit: "some";
  realName: string;
  alterEgo: string;
  tasks: Task["id"][];
  some: "Shit";
};

type StatusColumn = {
  id: string;
  tasks: Task["id"][];
  title: Status;
};

type Status = "Backburner" | "Ready" | "In Progress" | "Verifying" | "Waiting for Deployment" | "Deployed";

export {};
