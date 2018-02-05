import { router } from './AppNavigator';

export default (state, action) => {
    const newState = router.getStateForAction(action, state);
    return newState || state;
}