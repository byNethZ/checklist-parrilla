export interface IPost {
  id: number;
  path: string;
  approved: boolean | null;
  approver: string | null;
  copy: string;
}

export interface IStory {
  id: number;
  path: string;
  approved: boolean | null;
  approver: string | null;
}
