import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 'b61e66f7-4fce-4671-a574-215581e2ba99',
  name: 'diminish ginger near',
  gender: 'UNKNOWN',
  position: 'whoever nice babushka',
  createdBy: 'disappointment boastfully',
  createdDate: dayjs('2024-01-24T07:40'),
  recordStatusId: 8149,
};

export const sampleWithPartialData: IEmployee = {
  id: 'fb47b7fc-e3ff-4669-8e74-6f4e5341dbaa',
  name: 'yesterday a bassinet',
  gender: 'FEMALE',
  position: 'than beyond',
  createdBy: 'pad whether fast',
  createdDate: dayjs('2024-01-24T03:59'),
  lastModifiedBy: 'infiltrate',
  lastModifiedDate: dayjs('2024-01-24T02:42'),
  recordStatusId: 23767,
};

export const sampleWithFullData: IEmployee = {
  id: 'b4f4a307-2e3a-412f-a1e5-86c71f08dac1',
  name: 'whoever excuse',
  gender: 'UNKNOWN',
  position: 'unless surprisingly emotional',
  createdBy: 'buzzing accidentally homely',
  createdDate: dayjs('2024-01-24T18:32'),
  lastModifiedBy: 'dodge gee',
  lastModifiedDate: dayjs('2024-01-24T06:23'),
  recordStatusId: 26571,
};

export const sampleWithNewData: NewEmployee = {
  name: 'revolutionise burdensome so',
  gender: 'MALE',
  position: 'sit asterisk per',
  createdBy: 'acclaimed',
  createdDate: dayjs('2024-01-24T01:35'),
  recordStatusId: 16585,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
