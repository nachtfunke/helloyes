export const updateFavicon = (_favicons, _newColor) => {
    _favicons.forEach( icon => {
        let href = icon.href;
        
        // meaning, that the used favicon does not use the color from the override
        if ( href.indexOf(_newColor)  ) {
            const newHref = href.replace(/(illusion|sandwisp|mint|perano)/, _newColor);
            icon.href = newHref;
        }
    } );
}