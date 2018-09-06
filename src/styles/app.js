const AppStyles = {
    primaryText: {
        color: '#a9fffc'
    },
    glowText: {
        textShadow: '0 0 0.3rem'
    },
    textCenter: {
        textAlign: 'center'
    },
    textUpper: {
        textTransform: 'uppercase'
    },
    imgResponsive: {
        display: 'block',
        width: '100%',
        maxWidth: '100%'
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    loading: {
        position: 'fixed',
        top: 'calc(50% - 64px)',
        left: 'calc(50% - 64px)',
        width: '128px',
        height: '128px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundImage: 'url("https://doomtroopergame.com/assets/img/dt-bg.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    },
    backdrop: {
        background: "url('https://doomtroopergame.com/assets/img/dt-bg.jpg') no-repeat center fixed",
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hud: {
        position: 'relative',
        width: '90%',
        maxWidth: '35rem',
        opacity: 0,
        animation: 'fadeIn 0.5s ease-out 2s forwards, flicker 0.15s infinite'
    },
    hudBg: {
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        filter: 'drop-shadow(0 0 4rem rgba(0, 0, 0, 1))'
    },
    fog: {
        position: 'absolute',
        top: '12%',
        left: '25%',
        width: '50%',
        opacity: 0,
        transform: 'translateX(75%)',
        animation: 'fog_move 11s linear 7s infinite'
    },
    fogTwo: {
        position: 'absolute',
        top: '5%',
        left: '25%',
        width: '50%',
        opacity: 0,
        transform: 'translateX(75%)',
        animation: 'fog_move 10s linear 4s infinite'
    },
    title: {
        margin: '0 0 2.5rem 0',
        fontSize: '3rem',
        letterSpacing: '0.1rem',
        lineHeight: 1,
        textAlign: 'center',
        animation: 'text-flicker 3s linear infinite'
    },
    titleMobile: {
        fontSize: '2rem'
    },
    inputField: {
        border: '1px solid #a9fffc'
    },
    button: {
        display: 'inline-block',
        fontWeight: 400,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        userSelect: 'none',
        border: '1px solid transparent',
        padding: '.8rem 3rem',
        color: '#a9fffc',
        fontSize: '1.1rem',
        lineHeight: 1.5,
        textShadow: '0 0 0.3rem',
        backgroundSize: '100% 100%'
    }
}

export default AppStyles;