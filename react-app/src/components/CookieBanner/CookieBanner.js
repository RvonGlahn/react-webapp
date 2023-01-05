import CookieConsent from 'react-cookie-consent';

export const CookieBanner = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Sure man!!"
            cookieName="superSecretCookie"
            style={{ background: '#2B373B' }}
            buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
            expires={150}
            enableDeclineButton
        >
            This website does not use cookies to enhance the user experience. But we need this banner anyways.{' '}
        </CookieConsent>
    );
};
