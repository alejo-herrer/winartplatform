import './Components.css'

export function WButton({children, numBoton = 0}){
    
    const btn = {
        0: {
            bg: 'linear-gradient(0deg,rgba(161, 88, 24, 1) 13%, rgba(252, 176, 69, 1) 100%)',
            hoverBg: 'linear-gradient(0deg,rgba(110, 61, 18, 1) 13%, rgba(209, 138, 38, 1) 100%)',
            text: '#FFFFFF',
            hoverText: '#FFFFFF'
        },

        1: {
            bg: '#111111',
            hoverBg: '#333333',
            text: '#FFFFFF',
            hoverText: '#FFFFFF'
        }
    }

    const styleBtn = btn[numBoton]

    if (!styleBtn) {
        console.log('Btn invalido')
        return null
    }

    return(
        <button
            className='wt-Button'
            style={{    "--bg-color-btn": styleBtn.bg,
                        "--hover-color-btn": styleBtn.hoverBg, 
                        "--text-color-btn": styleBtn.text,
                        "--text-hover-color-btn": styleBtn.hoverText
                        }}>
            {children}
        </button>
    )

}