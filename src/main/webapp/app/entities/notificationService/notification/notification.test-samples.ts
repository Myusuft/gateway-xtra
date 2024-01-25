import dayjs from 'dayjs/esm';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: '98c5e067-7c1a-47d9-bb8a-e173178b5cb6',
  userId: '9beb8cb0-07c8-4818-85e6-01b26b0cb0e5',
  isShow: true,
  createdBy: 'fish',
  createdDate: dayjs('2024-01-24T23:09'),
  recordStatusId: 31789,
};

export const sampleWithPartialData: INotification = {
  id: 'fa11d5c0-a823-48f6-8b3d-409b344ef716',
  userId: 'f7496e85-e364-4acb-9e68-72c82e37e30c',
  description: 'ouch oof shakily',
  isShow: true,
  createdBy: 'now yoke',
  createdDate: dayjs('2024-01-24T14:38'),
  lastModifiedBy: 'furthermore',
  lastModifiedDate: dayjs('2024-01-24T12:04'),
  recordStatusId: 7307,
};

export const sampleWithFullData: INotification = {
  id: 'bb169f93-be1b-46dd-8fa0-4f4dfbaa393e',
  userId: '428fc12a-6d03-45d6-ad94-1aef326cabcf',
  description: 'rap or shocking',
  isShow: false,
  createdBy: 'solemnly once',
  createdDate: dayjs('2024-01-24T09:09'),
  lastModifiedBy: 'until',
  lastModifiedDate: dayjs('2024-01-24T22:13'),
  recordStatusId: 23416,
};

export const sampleWithNewData: NewNotification = {
  userId: '6982a7ee-6cb6-4cd8-9305-ced3cef8a83d',
  isShow: true,
  createdBy: 'or punctuate out',
  createdDate: dayjs('2024-01-24T16:41'),
  recordStatusId: 10785,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
