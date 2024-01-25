import dayjs from 'dayjs/esm';

import { IUserExpense, NewUserExpense } from './user-expense.model';

export const sampleWithRequiredData: IUserExpense = {
  id: 'e4b138d5-4943-4460-8258-6fe77ee78509',
  date: dayjs('2024-01-25T01:03'),
  category: 'heartfelt minority',
  total: 7828.36,
  evidence: 'coppice appearance overproduce',
  status: 'Revision',
  createdDate: dayjs('2024-01-24T01:28'),
  recordStatusId: 5692,
  createdBy: 'ha bah astride',
};

export const sampleWithPartialData: IUserExpense = {
  id: 'd2ef3296-c42b-4880-ad81-e5763b56f166',
  date: dayjs('2024-01-24T12:33'),
  category: 'hoarse around',
  total: 24985.72,
  evidence: 'mosque',
  exchangeRate: 16756.9,
  status: 'Revision',
  createdDate: dayjs('2024-01-24T23:08'),
  recordStatusId: 22722,
  createdBy: 'maintenance',
  lastModifiedBy: 'pickup entire clogs',
};

export const sampleWithFullData: IUserExpense = {
  id: 'c315d440-f957-40cc-83c0-e7c44fb1918b',
  date: dayjs('2024-01-24T06:51'),
  category: 'smug instead sticky',
  total: 24515.24,
  evidence: 'rapidly',
  exchangeRate: 11180.31,
  acceptedTotal: 19570.1,
  status: 'Revision',
  createdDate: dayjs('2024-01-24T07:04'),
  lastModifiedDate: dayjs('2024-01-24T22:28'),
  recordStatusId: 23363,
  createdBy: 'frizz without loudly',
  lastModifiedBy: 'hence golf nor',
};

export const sampleWithNewData: NewUserExpense = {
  date: dayjs('2024-01-24T05:40'),
  category: 'overload surprised',
  total: 19638.4,
  evidence: 'psst',
  status: 'NotSubmitted',
  createdDate: dayjs('2024-01-24T04:56'),
  recordStatusId: 919,
  createdBy: 'display slushy',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
