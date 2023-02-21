//라우팅 테스트 하기 위한 모듈

import {MemoryRouter, Route} from 'react-router';

export const withRouter = (routes, initialEntry = '/') => {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Route>{routes}</Route>
    </MemoryRouter>
  );
};
