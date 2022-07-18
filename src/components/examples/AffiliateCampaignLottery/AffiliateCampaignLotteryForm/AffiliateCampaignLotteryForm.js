import React, { useEffect, useState } from 'react';
// import { useMutation } from 'react-query';
// import { useSnackbar } from 'notistack';
// import { fetchApi, getGetConfig } from '@automation/shared/src/utils/utils';
// import { getLotteryInfoUrl } from '../../../common/apisPath';
import AffiliateCampaignLotteryFormPresentation from './AffiliateCampaignLotteryFormPresentation';

export default function AffiliateCampaignLotteryPage() {
  // const { enqueueSnackbar } = useSnackbar();
  // const [enteringPassword, setEnteringPassword] = useState(false);

  // const getPassword = (force = false, tryAgain = false) => {
  //   if (process.env.BROWSER) {
  //     if (force || localStorage.getItem('enteringPassword') === null) {
  //       setEnteringPassword(tryAgain);
  //       // eslint-disable-next-line no-alert
  //       const password = prompt(tryAgain ? 'رمز ورودی شما اشتباه بود. لطفا دوباره امتحان کنید.' : 'لطفا رمز عبور را وارد کنید');
  //       localStorage.setItem('enteringPassword', password);
  //       setEnteringPassword(false);
  //       getLotteryInfo.mutate();
  //     }
  //   }
  // };
  //
  // useEffect(() => {
  //   if (process.env.BROWSER) {
  //     if (localStorage.getItem('enteringPassword') === null) {
  //       getPassword(true);
  //     } else {
  //       getLotteryInfo.mutate();
  //     }
  //   }
  // }, []);

  // const getLotteryInfo = useMutation(
  //   'getLotteryInfo',
  //   () =>
  //     fetchApi(
  //       getLotteryInfoUrl(process.env.BROWSER && localStorage.getItem('enteringPassword')),
  //       getGetConfig({ noUseHttpOnlyCookie: true }),
  //     ),
  //   {
  //     onError: error => {
  //       if (error.code === 'INVALID_PASSWORD') {
  //         getPassword(true, true);
  //       } else {
  //         enqueueSnackbar(error.message || error.code || 'خطا', { variant: 'error' });
  //       }
  //     },
  //   },
  // );

  return (
    <AffiliateCampaignLotteryFormPresentation
      lotteryName="قرعه‌کشی ۷ اسفند"
      prize="یک سکه طلایی"
      winnerFullName="مجید باغبانی"
      winnerPhoneNumber="09998887766"
      // isError={getLotteryInfo.isError}
      // isLoading={getLotteryInfo.isLoading}
      // enteringPassword={enteringPassword}
      // retry={getLotteryInfo.mutate}
    />
  );
}
