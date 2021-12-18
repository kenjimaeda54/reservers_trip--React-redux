import 'react-redux'

import { RootState } from '../store/modules/root-Store'

declare module 'react-redux' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultRootState extends RootState { };
}
