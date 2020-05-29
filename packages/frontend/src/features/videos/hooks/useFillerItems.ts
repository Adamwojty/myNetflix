import {useEffect, useState} from 'react';

export const useFillerItems = (movieListContainer:any, movieItem:any, moviesList:number, minMargin:number ) => {
    const [fillerItems, setFillerItems] = useState<Array<number>>()
    const handleLastRowFill = () => { 
        const containerWidth = movieListContainer.current?.offsetWidth;
        const itemWidth = movieItem.current?.offsetWidth + minMargin *2;
        const itemsInRow = Math.floor(containerWidth/itemWidth);
        const itemsNeededInRow =  itemsInRow - (moviesList % itemsInRow);
        const fillerItems = new Array(itemsNeededInRow).fill(undefined).map((val,idx) => idx);
        setFillerItems(fillerItems);
    }
    useEffect(() => { 
        handleLastRowFill();
        window.addEventListener("resize", () => handleLastRowFill());
        return  window.removeEventListener("resize", () => handleLastRowFill()); 
    }, [])
    return fillerItems
}
