function transparentize (color, percentage){
    percentage = Math.ceil(percentage * 2.55)
    const transparent = percentage.toString(16);
    return `${color}${transparent}`
}

export default transparentize;
