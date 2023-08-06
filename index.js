function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    plainTextPositions.forEach((d) => {
        let so = plainText.slice(d.start, d.end)
        let id = htmlContent.indexOf(so);
        htmlContent = htmlContent.slice(0, id) + '<mark>' + htmlContent.slice(id, (id + so.length)) +
            '</mark>' + htmlContent.slice((id + so.length), htmlContent.length)

    })
    return htmlContent;
}
module.exports = highlightHTMLContent;