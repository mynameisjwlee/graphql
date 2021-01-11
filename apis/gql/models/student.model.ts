export interface InformationData {
  department: string;
  major: string;
  semester: number;
  doubleMajor: boolean;
}

export interface StudentData {
  id: number;
  name: string;
  information: InformationData;
  age?: number;
  address?: string;
  email?: string;
}

export const studentDatas: StudentData[] = [
  {
    id: 1,
    name: 'Lee',
    information: {
      department: 'software',
      major: 'software',
      semester: 3,
      doubleMajor: false,
    },
    age: 23,
    address: 'sejonro',
    email: 'asdf@naver.com',
  },
  {
    id: 2,
    name: 'Kevin',
    information: {
      department: 'scholar',
      major: 'thinking',
      semester: 7,
      doubleMajor: true,
    },
  },
  {
    id: 3,
    name: 'blaise',
    information: {
      department: 'mathematics',
      major: 'linear algebra',
      semester: 4,
      doubleMajor: false,
    },
    age: 32,
    email: 'qwerty@gmail.com',
  },
];
