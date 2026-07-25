export interface Course {
  enrolled: boolean;
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}