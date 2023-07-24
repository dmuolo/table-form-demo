import PubSub from 'pubsub-js';

export const EVENTS = {
  EMPLOYEE_RECORD_UPDATED: 'EMPLOYEE_RECORD_UPDATED',
};

export const publishEmployeeRecordUpdated = data => {
  PubSub.publish(EVENTS.EMPLOYEE_RECORD_UPDATED, data);
};

export const subscribeToEmployeeRecordUpdated = callback => {
  return PubSub.subscribe(EVENTS.EMPLOYEE_RECORD_UPDATED, (_, data) => {
    callback(data);
  });
};
