import { useSetRecoilState } from 'recoil';
import { phoneState } from './state';
import { useNuiEvent } from '../../nui-events/hooks/useNuiEvent';
import { PhoneEvents } from '../../../../../typings/phone';

export const usePhoneService = () => {
  const setVisibility = useSetRecoilState(phoneState.visibility);
  const setPhoneConfig = useSetRecoilState(phoneState.phoneConfig);
  const setPhoneReady = useSetRecoilState(phoneState.phoneReady);
  const setPhoneTime = useSetRecoilState(phoneState.phoneTime);
  useNuiEvent('PHONE', PhoneEvents.SET_VISIBILITY, setVisibility);
  useNuiEvent('PHONE', PhoneEvents.SET_PHONE_READY, setPhoneReady);
  useNuiEvent('PHONE', PhoneEvents.SET_CONFIG, setPhoneConfig);
  useNuiEvent('PHONE', PhoneEvents.SET_TIME, setPhoneTime);
};
