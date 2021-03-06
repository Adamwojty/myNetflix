const calcEndWidth = ( numOfFullMoves:number, move: number, lastMove: number, additionalVideosNum: number) => {
    const endWidth =   additionalVideosNum !== 0 ? 
    numOfFullMoves * move -(move -  (lastMove))
    : numOfFullMoves * move;
    return -endWidth
}

const calcLastMove = (videosNum: number, videoWidth:number, margin: number) => (Math.floor(videosNum * (videoWidth + margin)))


const calcElementsOnScreen = (elementWidth: number, wrapperWidth: number, minMargin: number) => {
    return Math.floor(wrapperWidth/ (elementWidth + (minMargin * 2)));
}

export const calcMargins = (elementWidth: number, wrapperWidth: number) => {
        const minMargin = wrapperWidth < 768 ? 15 : 30
        const elementsOnScreen = calcElementsOnScreen(elementWidth, wrapperWidth,minMargin)
        const freeSpace = wrapperWidth- (elementWidth * elementsOnScreen)
        return (freeSpace) / (elementsOnScreen + 1)
}


export const handleCalculations = (elementWidth: number, wrapperWidth: number, numOfElements: number, margin: number) => {
    const minMargin = wrapperWidth < 768 ? 15 : 30
    const elementsOnScreen = calcElementsOnScreen( elementWidth, wrapperWidth,minMargin)
    const additionalVideosNum = numOfElements % elementsOnScreen
    const move = wrapperWidth - margin
    const numOfFullMoves = Math.ceil((numOfElements / elementsOnScreen) - 1)

    const lastMove = calcLastMove(additionalVideosNum, elementWidth, margin)
    const end = calcEndWidth(numOfFullMoves, move, lastMove, additionalVideosNum)

    return{
        lastMove,
        end,
        move,
        additionalVideosNum
    }
}