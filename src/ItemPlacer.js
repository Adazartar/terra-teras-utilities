import { useState } from "react";
import "./App.css";
import "./ItemPlacer.css";


export default function ItemPlacer() {
    const [healthPackCount, setHealthPackCount] = useState(4);
    const [goldBagCount, setGoldBagCount] = useState(8);
    const [noItemCount, setNoItemCount] = useState(4);
    const [placedItem, setPlacedItem] = useState("");
    const [grid, setGrid] = useState(() => {
        const initialGrid = [];
        for (let x = 1; x <= 5; x++) {
            const row = [];
            for (let y = 1; y <= 5; y++) {
                row.push({ x, y, wall: false, item: false });
            }
            initialGrid.push(row);
        }
        return initialGrid;
    });   

    function toggleWall(x, y) {
        setGrid((prevGrid) =>
            prevGrid.map((row) =>
                row.map((cell) => {
                if (cell.x === x && cell.y === y) {
                    return { ...cell, wall: !cell.wall };
                }
                return cell;
                })
            )
        );
    }

    function placeItem(){
        setGrid(prevGrid =>
            prevGrid.map(row =>
                row.map(cell => ({
                    ...cell,
                    item: false
                }))
            )
        );
        const nonWallCells = grid.flat().filter(cell => !cell.wall);
        const randomIndex = Math.floor(Math.random() * nonWallCells.length);
        const randomCell = nonWallCells[randomIndex];
        setGrid(prevGrid =>
            prevGrid.map(row =>
                row.map(cell =>
                    cell.x === randomCell.x && cell.y === randomCell.y
                        ? { ...cell, item: true }
                        : cell
                )
            ) 
        );

        const rand_num = (healthPackCount + goldBagCount + noItemCount) * Math.random();
        if(rand_num < healthPackCount){ setPlacedItem("Health Pack") }
        else if(rand_num < healthPackCount + goldBagCount){ setPlacedItem("Gold Bag") }
        else { setPlacedItem("No Item") }
    }

    return (
        <div className="main-app">
            <div className="header-text">Welcome to the Terra Teras Item Placer</div>
            <div className="item-row">
                <div>Health Pack Count:</div>
                <div className="value-handlers">
                    <button className="circle-btn" onClick={() => setHealthPackCount(healthPackCount - 1)}>−</button>
                    <div>{healthPackCount}</div>
                    <button className="circle-btn" onClick={() => setHealthPackCount(healthPackCount + 1)}>+</button>
                </div>
            </div>
            <div className="item-row">
                <div>Gold Bag Count:</div>
                <div className="value-handlers">
                    <button className="circle-btn" onClick={() => setGoldBagCount(goldBagCount - 1)}>−</button>
                    <div>{goldBagCount}</div>
                    <button className="circle-btn" onClick={() => setGoldBagCount(goldBagCount + 1)}>+</button>
                </div>
                
            </div>
            <div className="item-row">
                <div>No Item Count:</div>
                <div className="value-handlers">
                    <button className="circle-btn" onClick={() => setNoItemCount(noItemCount - 1)}>−</button>
                    <div>{noItemCount}</div>
                    <button className="circle-btn" onClick={() => setNoItemCount(noItemCount + 1)}>+</button>
                </div>
            </div>
            <div className="grid">
                {grid.flat().map((cell) => (
                <div key={`${cell.x}-${cell.y}`} className={`cell${cell.wall ? " wall" : ""}${cell.item ? " item" : ""}`} onClick={() => toggleWall(cell.x, cell.y)}></div>
                ))}
            </div>
            <div className="place-button" onClick={() => placeItem()}>Place Item</div>
            <div>{placedItem}</div>
        </div>
    );
}
