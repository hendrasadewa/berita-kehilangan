import { Person } from './LostPersonTypes';

export enum ReportStatus {
  REQUESTED = 'Requested',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  CLOSED = 'Closed',
}

export interface Reports {
  person: Person;
  location: Location;
  statusUpdate: ReportStatusUpdate[];
  lastStatus: ReportStatus;
}

export interface ReportStatusUpdate {
  report: Reports;
  status: ReportStatus;
  updatedAt: Date;
}
