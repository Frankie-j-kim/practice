import {rest} from 'msw';

export const handlers = [];

async function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
