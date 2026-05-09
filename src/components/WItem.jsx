import './Components.css'

export function WItem({children, numItem = 0}){
    
    const item = {
        0: {
            bg: '#F3A673AD',
            text: '#1B1B1B',
            svg: '#0E5A25',
        },

        1: {
            bg: '#111111',
            text: '#FFFFFF',
            svg: '#0E5A25',
        }
    }

    const styleItem = item[numItem]

    if (!styleItem) {
        console.log('Item invalido')
        return null
    }

    return(
        <li
            className='wt-Item'
            style={{    "--bg-color-item": styleItem.bg,
                        "--text-color-item": styleItem.text,
                        "--svg-color-item": styleItem.svg
                        }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {children}
        </li>
    )

}