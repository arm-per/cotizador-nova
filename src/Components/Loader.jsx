import {TailSpin } from 'svg-loaders-react'

const Wait = ({children}) => {


    return <div style={{'margin': 'auto', 'position': 'fixed', 'left': 'calc(50vw - 40px)', 'width': '80px', 'top': 'calc(50dvh - 40px)'}}>
        <div style={{'width': '60px', 'height': '60px', 'margin': 'auto', 'backgroundColor': '#0063AD', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center','borderRadius': '100%'}}>
        <TailSpin/>
        </div>
        <span style={{'marginTop': '10px', 'color': '#0063AD', 'display': 'block', 'fontWeight': 'bold'}}>
            {children}
        </span>
    </div>
}

export {
    Wait
}