import React from 'react';

export interface User {
  fullname: string;
  email: string;
  picture?: string;
}

export interface Visits {
  id: string;
  visitor: string;
  patient: string;
  relation: string;
  visit_start_time: string;
}

export interface InactiveVisits extends Visits {
  visit_end_time: string;
}
